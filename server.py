from flask import Flask, request, jsonify, render_template
import sys
import traceback
from seqwiki.SeqMgr import SeqMgr

sys.path.append("seqwiki")
app = Flask(__name__)
app.debug = True
seq_mgr = SeqMgr()


@app.route("/", methods=['GET'])
def index():
    return render_template('index.html')


@app.route("/seq", methods=['POST'])
def new_seq():
    data = seq_mgr.new_seq()
    return render_template('edit.html', data=data)


@app.route("/seq/<uid>", methods=['GET'])
def edit_seq(uid):
    data = seq_mgr.load_seq(uid)
    return render_template('edit.html', data=data)


@app.errorhandler(Exception)
def unhandled_exception(e):
    app.logger.error('Unhandled Exception: %s', e)
    response = jsonify({"error": e.message})
    response.status_code = 500
    return response


if __name__ == '__main__':
    app.run()
