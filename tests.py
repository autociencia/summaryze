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

    def test_download_blogspot_page(self):
        url = 'https://github.com/autociencia/summaryze'
        with self.assertRaises(ValueError):
            summaryze.get_titles(url)

    def test_connection_error(self):
        url = 'http://www.w3.org'
        with self.assertRaises(ConnectionError):
            summaryze.download_page(url)

    def test_invalid_url(self):
        urls = [
            'valid.url',
            'invalid,url',
            'httx://invalid.c',
            'www.invalid',
            'www.invalid.url.com'
            'invalid_url'
            'www.url.invalid.com',
            'ftp://url.invalid.com']

        for url in urls:
            with self.assertRaises(ConnectionError):
                summaryze.download_page(url)

    def test_valid_url(self):
        urls = [
            'https://autociencia.blogspot.com/',
            'https://autociencia.blogspot.com/2016/07/teoria-dos-conjuntos-introducao.html',
            'http://www.google.com/'
        ]

        for url in urls:
            self.assertIsInstance(summaryze.download_page(url), str)


if __name__ == "__main__":
    unittest.main()
