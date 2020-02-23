#!/usr/bin/env python3
from summaryze import app
import os

"""
A script start a Flask Application 
to generate summary for blogspot articles.
This software is available under GPL license.
Author: Autociência
Year: 2020
License: GNU GENERAL PUBLIC LICENSE (GPL)
"""

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
