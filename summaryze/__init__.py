import os
from flask import Flask

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config.from_object('summaryze.config.local')

from summaryze import routes