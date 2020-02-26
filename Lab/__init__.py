# -*- coding: utf-8 -*-
from flask import Flask, render_template
# from flask_sqlalchemy import SQLAlchemy
# from flask_bootstrap import Bootstrap
# from flask_moment import Moment
# from flask_debugtoolbar import DebugToolbarExtension




app = Flask('Lab')
# app.config.from_pyfile('settings.py')
# app.config["SECRET_KEY"] = 'hellomyscrect'
app.jinja_env.trim_blocks = True
app.jinja_env.lstrip_blocks = True




# app.register_blueprint(admin_bp, url_prefix='/admin')
# app.register_blueprint(user_bp)



@app.errorhandler(404)
@app.errorhandler(400)
def page_not_found(e):
    return render_template('errors/404.html'), 404

@app.errorhandler(500)
def error(e):
    return render_template('errors/500.html'), 500




@app.route('/')
def index():
    print(app.config)
    return render_template('index.html')


if __name__ == "__main__":
    app.run()

