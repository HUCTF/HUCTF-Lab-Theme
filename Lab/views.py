from flask import Flask, render_template, redirect, flash, url_for, request, current_app, session
from werkzeug.utils import secure_filename
import os
from Lab import app
from Lab.utils import redirect_back
from flask_login import current_user, logout_user, login_required, login_user
from datetime import datetime




@app.route('/')
def index():
    print(app.config)
    return render_template('index.html')


if __name__ == "__main__":
    app.run()




