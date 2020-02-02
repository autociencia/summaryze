#!/usr/bin/env python3
import re
import requests
from bs4 import BeautifulSoup
from requests.exceptions import ConnectionError

"""
A script to generate summary for blogspot articles.
This software is available under GPL license.
Author: Autociência
Year: 2020
License: GNU GENERAL PUBLIC LICENSE (GPL)
"""


def get_titles(url):
    html_doc = download_page(url)
    soup = BeautifulSoup(html_doc, 'html.parser')
    content_page = soup.find('div', {'class': 'post-body'})

    if content_page is None:
        raise ValueError(f'"{url}" isn\'t a valid blogspot page format!')

    titles = content_page.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])

    return titles


def download_page(url):
    url_pattern = r"\b((http|https):\/\/?)[^\s()<>]+(?:\([\w\d]+\)|([^[:punct:]\s]|\/?))"

    if not re.match(url_pattern, url):
        print(f'Invalid URL format for "{url}"')
        exit(1)

    try:
        request = requests.get(url)
    except ConnectionError:
        print(f'Unavailable "{url}"')
        exit(1)

    html_doc = request.text
    request.close()

    return html_doc


def index_summary(titles):
    index = 0
    previous_title_level = int(titles[0].name[1])
    inner_list = ''
    outer_list = ''

    while index < len(titles):
        html_title = titles[index]
        title_level = int(html_title.name[1])
        title = html_title.text.replace('\n', '').strip()

        if title_level == previous_title_level:
            # Same level title
            inner_list += f'<li><a href="#ANCHOR">{title}</a></li>'
            index = index + 1
        elif title_level > previous_title_level:
            # Subtitle (relative to previous title)
            new_summary = index_summary(titles[index:])
            inner_list = re.sub('</li>$', '', inner_list)
            inner_list += f'{new_summary[0]}'
            index = index + new_summary[1]  # jump read subtitles
            continue
        elif title_level < previous_title_level:
            # Higher title (relative to previous title)
            break

        previous_title_level = title_level

    outer_list = f'<ol>{inner_list}</ol>'

    return [outer_list, index]


def get_summary(titles):
    summary = f'<div class="summary-post">{index_summary(titles)[0]}</div>'
    pretty_summary = BeautifulSoup(summary, 'lxml').body.next.prettify()

    return pretty_summary


def main():
    url = input('URL: ')
    titles = get_titles(url)
    summary = get_summary(titles)
    print('\n' + summary)


if __name__ == "__main__":
    main()
