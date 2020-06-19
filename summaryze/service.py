from summaryze.api import summaryze as api

"""
A service layer between routes and api.
This software is available under GPL license.
Author: Autociência
Year: 2020
License: GNU GENERAL PUBLIC LICENSE (GPL)
"""

def get_summary_by_url(json_request):
    """
    Receives a URL by JSON and returns an HTML summary.
    :return: a HTML summary
    """

    if json_request == None:
        raise KeyError('Malformed Request, no URL JSON found')

    if 'url' in json_request.keys():
        url = json_request['url'].lower()
        summary = api.get_summary_by_url(url)

        return summary
    else:
        raise KeyError('"URL" property not found in JSON')


def get_summary_by_html(json_request):
    """
    Receives a HTML by JSON and returns an HTML summary.
    :return: a HTML summary
    """

    if json_request == None:
        raise KeyError('Malformed Request, no HTML JSON found')

    if 'html' in json_request.keys():
        html = json_request['html'].lower()
        summary = api.get_summary_by_html(html)

        return summary
    else:
        raise KeyError('"HTML" property not found in JSON')