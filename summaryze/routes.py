from flask import render_template
from summaryze import app

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')
