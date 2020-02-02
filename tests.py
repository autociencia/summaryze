#!/usr/bin/env python3
import unittest
import summaryze
from requests.exceptions import ConnectionError

"""
A script to test generated summary for blogspot articles.
This software is available under GPL license.
Author: Autociência
Year: 2020
License: GNU GENERAL PUBLIC LICENSE (GPL)
"""


class TestURLRequest(unittest.TestCase):

    def test_invalid_url(self):
        """
        Tests download of an invalid web page.
        Expected: raises exception to download invalid pages.
        """

        urls = [
            'valid.url',
            'invalid,url',
            'httx://invalid.c',
            'www.invalid',
            'www.invalid.url.com'
            'invalid_url'
            'www.url.invalid.com',
            'ftp://url.invalid.com'
        ]

        for url in urls:
            with self.assertRaises(ConnectionError):
                summaryze.download_page(url)

    def test_valid_url(self):
        """
        Tests download of a valid web page.
        Expected: returns the content of a valid page.
        """

        urls = [
            'https://autociencia.blogspot.com/',
            'https://autociencia.blogspot.com/2016/07/teoria-dos-conjuntos-introducao.html',
            'http://www.google.com/'
        ]

        for url in urls:
            page_content = summaryze.download_page(url)

            self.assertIsInstance(page_content, str)
            self.assertGreater(len(page_content), 0)


class TestSummary(unittest.TestCase):

    def test_get_valid_article_blogspot(self):
        """
        Tests function to obtain titles from a page with correct blogspot format.
        Expected: returns a list of titles.
        """

        url = 'https://autociencia.blogspot.com/2016/07/teoria-dos-conjuntos-introducao.html'
        html_doc = summaryze.download_page(url)
        titles = summaryze.get_titles(html_doc)

        self.assertIsInstance(titles, list)
        self.assertGreater(len(titles), 0)

    def test_get_article_with_no_titles(self):
        """
        Tests function to obtain titles from a page with no titles, but correct blogspot format.
        Expected: raises exception to get titles.
        """

        url = 'https://autociencia.blogspot.com/p/contato_16.html'
        html_doc = summaryze.download_page(url)

        with self.assertRaises(ValueError):
            summaryze.get_titles(html_doc)


if __name__ == "__main__":
    unittest.main()
