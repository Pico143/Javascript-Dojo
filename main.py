from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)


@app.route('/')
def home_page():
    return redirect('/question-with-one-answer')

@app.route('/question-with-one-answer')
def question_with_one_answer():
    return render_template('question.html')

@app.route('/the-question')
def handle_question():
    request.form(['question'])
    return render_template('question.html')

if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=8000,
        debug=True,
    )
