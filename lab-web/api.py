#coding=utf-8
import flask, json,urllib,gmpy2
from flask import render_template
import base64,base58,base91,base36,base62
#62->pip install pybase62
from flask import request, jsonify,make_response,Markup
#lsof -i:8886
#netstat
import sys
from Dict import *
# 创建一个服务，把当前这个python文件当做一个服务
server = flask.Flask(__name__)
@server.route('/', methods=['get', 'post'])
def index():
    # 从Dict.py中读入Dict并且传入html
    response = make_response(render_template('index.html'))
    return response
@server.route('/goto_member', methods=['get', 'post'])
def goto_member():
    # 从Dict.py中读入Dict并且传入html
    response = make_response(render_template('member.html', member_dic=member_dic))
    return response
@server.route('/goto_introduction', methods=['get', 'post'])
def goto_introduction():
    # 从Dict.py中读入Dict并且传入html
    response = make_response(render_template('introduction.html',introduction_dic=introduction_dic))
    return response
@server.route('/goto_history', methods=['get', 'post'])
def goto_history():
    response = make_response(render_template('history.html',history_dic=history_dic))
    return response

# @server.route('/goto_newstudent', methods=['get', 'post'])
# def goto_newstudent():
#     response = make_response(render_template('newstudent.html'))
#     return response

@server.route('/goto_blog', methods=['get', 'post'])
def goto_newstudent():
    response = make_response(render_template('blog.html',blog_dic=blog_dic))
    return response
@server.route('/get_Dict', methods=['get', 'post'])
def get_Dict():
    data = request.get_data()
    data = data.decode('utf-8')
    data = json.loads(data)
    # print(data['need'])
    if(data['passwd']=='123456'):
        lc = locals()
        exec('result={"'+data['need']+'":'+data['need']+'}')
        result = lc['result']
        # print(result)
        return  result


if __name__ == '__main__':
    server.run(debug='true' , port=8886, host='0.0.0.0')  # 指定端口、host,0.0.0.0代表不管几个网卡，任何ip都可以访问
