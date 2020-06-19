import unittest
import requests
import json

class TestURLRequest(unittest.TestCase):

    BASE_URL = 'http://localhost:5000'

    def test_url_request_with_no_json(self):
        endpoint = f'{self.BASE_URL}/summary/url'
        headers = {'Content-Type': 'application/json'}

        resp = requests.post(endpoint, headers=headers, data=None)

        self.assertEqual(resp.status_code, 400)

# TODO validate backend error msgs