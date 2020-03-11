#coding:utf-8
from flask import request, jsonify, make_response, Markup, render_template

from Lab.Dict import member_dic, introduction_dic, history_dic, blog_dic
from Lab import app

import sys
import json

@app.route('/', methods=['GET', 'POST'])
def index():
    # 从Dict.py中读入Dict并且传入html
    # response = make_response(render_template('index.html'))
    # return response
    return render_template('index.html')
    
@app.route('/goto_member', methods=['GET', 'POST'])
def goto_member():
    # 从Dict.py中读入Dict并且传入html
    # response = make_response(render_template('member.html', member_dic=member_dic))
    # return response
    return render_template('member.html', member_dic=member_dic)

@app.route('/goto_introduction', methods=['GET', 'POST'])
def goto_introduction():
    # 从Dict.py中读入Dict并且传入html
    response = make_response(render_template('introduction.html',introduction_dic=introduction_dic))
    return response
    return render_template('introduction.html', introduction_dic=introduction_dic)

@app.route('/goto_history', methods=['GET', 'POST'])
def goto_history():
    response = make_response(render_template('history.html',history_dic=history_dic))
    return response

@app.route('/goto_blog', methods=['GET', 'POST'])
def goto_newstudent():
    response = make_response(render_template('blog.html',blog_dic=blog_dic))
    return response

@app.route('/get_Dict', methods=['GET', 'POST'])
def get_Dict():
    data = request.get_data()
    data = data.decode('utf-8')
    data = json.loads(data)
    if(data['passwd']=='123456'):
        lc = locals()
        exec('result={"'+data['need']+'":'+data['need']+'}')
        result = lc['result']
        return  jsonify(result)