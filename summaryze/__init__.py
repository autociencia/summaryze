import connexion
import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

connexion_app = connexion.App(__name__, specification_dir='config/api')

app = connexion_app.app
app.config.from_object('summaryze.config.local')

from summaryze import routes