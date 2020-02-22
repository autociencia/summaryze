from flask import render_template
from flask import request
from flask import Response
from flask_api import status
from summaryze import app
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


@app.route('/summary', methods=['GET'])
def get_summary():
    """
    Receives a valid URL and returns an HTML summary.
    :return: a HTML summary
    """

    try:
        url = request.args.get('url')
        summary = api.get_summary(url)
        return Response(summary, mimetype='text/html; charset=utf-8')
    except Exception as e:
        return str(e), status.HTTP_400_BAD_REQUEST
