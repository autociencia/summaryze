#!/usr/bin/env python3
from summaryze import app

"""
A script start a Flask Application 
to generate summary for blogspot articles.
This software is available under GPL license.
Author: Autociência
Year: 2020
License: GNU GENERAL PUBLIC LICENSE (GPL)
"""

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
