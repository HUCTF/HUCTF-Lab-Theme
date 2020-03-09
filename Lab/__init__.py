# -*- coding: utf-8 -*-
from flask import Flask, render_template

app = Flask('Lab')
app.config["SECRET_KEY"] = 'hellomyscrect'
# app.jinja_env.trim_blocks = True
# app.jinja_env.lstrip_blocks = True

@app.errorhandler(400)
def page_not_found(e):
    return render_template('errors/404.html'), 404

@app.errorhandler(500)
def error(e):
    return render_template('errors/500.html'), 500

from Lab import view, Dict