import os
import sys

from Lab import app

# SQLite URI compatible
WIN = sys.platform.startswith('win')
if WIN:
    prefix = 'sqlite:///'
else:
    prefix = 'sqlite:////'


dev_db = prefix + os.path.join(os.path.dirname(app.root_path), 'data.db')
print(dev_db)
print(app.root_path)
print(prefix+'data/data.db')
SECRET_KEY = os.getenv('SECRET_KEY', 'hellomysecret')
SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URI', dev_db)
DEBUG_TB_INTERCEPT_REDIRECTS = False
# FLASK_ENV=development
LAB_PER_PAGE = '10'

CKEDITOR_SERVE_LOCAL=True
CKEDITOR_HEIGHT=400