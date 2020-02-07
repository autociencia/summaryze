#!/usr/bin/env python3
import unittest
from src import summaryze
from bs4 import BeautifulSoup

"""
A script to test generated summary for blogspot articles.
This software is available under GPL license.
Author: Autociência
Year: 2020
License: GNU GENERAL PUBLIC LICENSE (GPL)
"""


class TestSummary(unittest.TestCase):

    def test_get_titles_with_valid_article_blogspot(self):
        """
        Tests function to obtain titles from a page with correct blogspot format.
        Expected: returns a list of titles.
        """

        url = 'https://autociencia.blogspot.com/2016/07/teoria-dos-conjuntos-introducao.html'
        html_doc = summaryze.download_page(url)
        titles = summaryze.get_titles(html_doc)

        self.assertIsInstance(titles, list)
        self.assertGreater(len(titles), 0)

    def test_article_with_no_titles(self):
        """
        Tests function to obtain titles from a page with no titles, but correct blogspot format.
        Expected: raises exception to get titles.
        """

        url = 'https://autociencia.blogspot.com/p/contato_16.html'
        html_doc = summaryze.download_page(url)

        # real page
        with self.assertRaises(ValueError):
            summaryze.get_titles(html_doc)

        test_page = """
        <!DOCTYPE html>
        <html>
          <body>
            <div class="post-body">
            <!-- no titles here-->
            </div>
          </body>
        </html>"""

        # fake page
        with self.assertRaises(ValueError):
            summaryze.get_titles(test_page)

    def test_summary_index_with_titles_in_the_same_level(self):
        """
        Tests creation of a summary with same title level.
        Expected: a summary (string) with one list of <li>.
        """

        test_page = """
        <!DOCTYPE html>
        <html>
            <body>
                <div class="post-body">
                    <h3>Title One</h3>
                    <h3>Title Two</h3>
                    <h3>Title Three</h3>
                    <h3>Title Four</h3>
                    <h3>Title Five</h3>
                </div>
            </body>
        </html>"""

        titles = summaryze.get_titles(test_page)
        summary = summaryze.get_summary(titles)

        str_expected = """
        <div class="summary-post">
            <ol>
                <li><a href="#ANCHOR">Title One</a></li>
                <li><a href="#ANCHOR">Title Two</a></li>
                <li><a href="#ANCHOR">Title Three</a></li>
                <li><a href="#ANCHOR">Title Four</a></li>
                <li><a href="#ANCHOR">Title Five</a></li>
            </ol>
        </div>"""
        expected_summary = BeautifulSoup(str_expected, 'lxml').body.next.prettify()

        self.assertEqual(summary, expected_summary)

    def test_summary_index_with_titles_in_asc_level(self):
        """
        Tests creation of a summary with title levels in ascending form.
        Expected: a summary (string) with linked lists of <li> for each title.
        """

        test_page = """
        <!DOCTYPE html>
        <html>
            <body>
                <div class="post-body">
                    <h1>Title One</h1>
                    <h2>Title Two</h2>
                    <h3>Title Three</h3>
                    <h4>Title Four</h4>
                    <h5>Title Five</h5>
                </div>
            </body>
        </html>"""

        titles = summaryze.get_titles(test_page)
        summary = summaryze.get_summary(titles)

        str_expected = """
        <div class="summary-post">
            <ol>
                <li><a href="#ANCHOR">Title One</a>
                    <ol>
                        <li><a href="#ANCHOR">Title Two</a>
                            <ol>
                                <li><a href="#ANCHOR">Title Three</a>
                                    <ol>
                                        <li><a href="#ANCHOR">Title Four</a>
                                            <ol>
                                                <li><a href="#ANCHOR">Title Five</a></li>
                                            </ol>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </li>
            </ol>
        </div>"""
        expected_summary = BeautifulSoup(str_expected, 'lxml').body.next.prettify()

        self.assertEqual(summary, expected_summary)

    def test_summary_index_with_titles_asc_and_desc_level(self):
        """
        Tests creation of a summary with title levels increasing and decreasing.
        Expected: a summary (string) with titles and its subtitles in as a list <li>.
        """

        test_page = """
        <!DOCTYPE html>
        <html>
            <body>
                <div class="post-body">
                    <h1>Title One</h1>
                    <h2>Title Two</h2>
                    <h2>Title Three</h2>
                    <h1>Title Four</h1>
                    <h1>Title Five</h1>
                </div>
            </body>
        </html>"""

        titles = summaryze.get_titles(test_page)
        summary = summaryze.get_summary(titles)

        str_expected = """
        <div class="summary-post">
            <ol>
                <li><a href="#ANCHOR">Title One</a>
                    <ol>
                        <li><a href="#ANCHOR">Title Two</a></li>
                        <li><a href="#ANCHOR">Title Three</a></li>
                    </ol>
                </li>
                <li><a href="#ANCHOR">Title Four</a></li>
                <li><a href="#ANCHOR">Title Five</a></li>
            </ol>
        </div>"""
        expected_summary = BeautifulSoup(str_expected, 'lxml').body.next.prettify()

        self.assertEqual(summary, expected_summary)

    def test_summary_index_with_titles_desc_level(self):
        """
        Tests creation of a summary with title levels decreasing.
        Expected: a summary (string) with titles and its subtitles
        without highlest titles in the end.
        """

        test_page = """
        <!DOCTYPE html>
        <html>
            <body>
                <div class="post-body">
                    <h2>Title One</h2>
                    <h2>Title Two</h2>
                    <h1>Title Three</h1>
                </div>
            </body>
        </html>"""

        titles = summaryze.get_titles(test_page)
        summary = summaryze.get_summary(titles)

        str_expected = """
        <div class="summary-post">
            <ol>
                <li><a href="#ANCHOR">Title One</a></li>
                <li><a href="#ANCHOR">Title Two</a></li>
            </ol>
        </div>"""
        expected_summary = BeautifulSoup(str_expected, 'lxml').body.next.prettify()

        self.assertEqual(summary, expected_summary)


if __name__ == "__main__":
    unittest.main()
