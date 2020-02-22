import os
from flask import Flask

"""
Initfile to create Flask App.
Author: Autociência
Year: 2020
License: GNU GENERAL PUBLIC LICENSE (GPL)
"""

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config.from_object('summaryze.config.local')

from summaryze import routes