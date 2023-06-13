#!/usr/bin/env python3
import re
import requests
import sys
from bs4 import BeautifulSoup
from requests.exceptions import ConnectionError

"""
A script to generate summary for blogspot articles.
This software is available under GPL license.
Author: Autociência
Year: 2020
License: GNU GENERAL PUBLIC LICENSE (GPL)
"""


def get_titles(html_doc):
    """
    Extracts and returns a list of titles from an HTML page.
    :param html_doc: is a page to extract titles
    :return: a list of titles
    """

    soup = BeautifulSoup(html_doc, 'html.parser')
    content_page = soup.find('div', {'class': 'post-body'})

    if content_page is None:
        raise ValueError(f'Blogspot article format not detected')

    titles = content_page.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])

    if len(titles) == 0:
        raise ValueError('No title found for this page')

    return titles


def download_page(url):
    """
    Downloads HTML pages for valid URLs.
    :param url: to download an HTML content
    :return: an HTML page as string
    """

    url_pattern = r"\b((http|https):\/\/?)[^\s()<>]+(?:\([\w\d]+\)|([^[:punct:]\s]|\/?))"

    if not re.match(url_pattern, url):
        raise ConnectionError(f'Invalid URL format for "{url}"')

    try:
        request = requests.get(url)
    except Exception:
        raise ConnectionError(f'Unavailable "{url}"')

    html_doc = request.text
    request.close()

    return html_doc


def index_summary(titles):
    """
    Index all titles in a summary.
    :param titles: to create a summary
    :return: a summary with index
    """

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


def create_summary(titles):
    """
    Create an indexed summary.
    :param titles: to create a summary
    :return: a pretty indexed summary in HTML format
    """

    summary = f'<div class="summary-post"><b>Índice</b><br>{index_summary(titles)[0]}</div>'
    pretty_summary = BeautifulSoup(summary, 'html.parser').prettify()

    return pretty_summary


def get_summary_by_url(url):
    """
    Main function that tries download a page,
    extract its titles and to create a summary.
    :param url: to generate a summary
    :return: a pretty indexed summary in HTML format
    """

    html_doc = download_page(url)

    return get_summary_by_html(html_doc)

def get_summary_by_html(html_doc):
    """
    Main function that tries download a page,
    extract its titles and to create a summary.
    :param url: to generate a summary
    :return: a pretty indexed summary in HTML format
    """

    titles = get_titles(html_doc)
    summary = create_summary(titles)

    return summary

def main(args):
    """
    Command-line interface from this app.
    :param args: a list of args from sys, where only second arg is used
    """

    try:
        if len(args) == 1:
            url = input('URL: ')
        else:
            url = args[1]

        summary = get_summary_by_url(url)
        print(summary)
    except Exception as e:
        print(f'ERROR: {e}')


if __name__ == "__main__":
    main(sys.argv)
