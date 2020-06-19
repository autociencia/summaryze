from flask import render_template
from flask import request
from flask import Response
from flask_api import status
from summaryze import app
from summaryze import service
from summaryze.api import summaryze as api

"""
Routes of all Summaryze endpoints.
Author: Autociência
Year: 2020
License: GNU GENERAL PUBLIC LICENSE (GPL)
"""

@app.route('/', methods=['GET'])
def index():
    """
    Route of home page.
    :return: a view of home page
    """

    return render_template('index.html')


@app.route('/summary/url', methods=['POST'])
def get_summary_by_url():
    """
    Receives a valid URL article and returns an HTML summary.
    :return: a HTML summary
    """

    try:
        url = request.json
        summary = service.get_summary_by_url(url)
        return Response(summary, mimetype='text/html; charset=utf-8')
    except Exception as e:
        return str(e), status.HTTP_400_BAD_REQUEST


@app.route('/summary/html', methods=['POST'])
def get_summary_by_html():
    """
    Receives a valid HTML article and returns an HTML summary.
    :return: a HTML summary
    """

    try:
        html = request.json
        summary = service.get_summary_by_html(html)
        return Response(summary, mimetype='text/html; charset=utf-8')
    except Exception as e:
        return str(e), status.HTTP_400_BAD_REQUEST
