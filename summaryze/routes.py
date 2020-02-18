from flask import render_template
from flask import request
from flask import Response
from summaryze import app
from summaryze.api import summaryze as api

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/summary', methods=['GET'])
def get_summary():
    url = request.args.get('url')
    summary = api.get_summary(url)

    return Response(summary, mimetype='text/html; charset=utf-8')