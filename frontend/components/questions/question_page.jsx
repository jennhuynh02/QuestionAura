import React from 'react';
import AnswerFormContainer from '../answer/answer_form_container';
import Header from '../header/header_container';

class QuestionPage extends React.Component {
  componentDidMount() {
    // this.props.fetchQuestion({ id: this.props.questionId });
    this.props.fetchAnswers();
  }


  render() {
    const {
      questions, answers, questionId, openModal, deleteQuestion, deleteAnswer,
    } = this.props;

    let question;
    let q;
    let qId;
 
    for (let i = 0; i < questions.length; i++) {
      qId = questions[i].id;
      if (qId === questionId) {
        question = questions[i].ask;
        q = questions[i];
        break;
      }
    }

    const answersToQuestion = [];
    const aId = [];
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].question_id === questionId) {
        aId.push(answers[i].id);
        answersToQuestion.push(answers[i]);
      }
    }

    return (
      <div className="question-page">
        <Header />
        <div className="question-page-box">
          <p className="question-page-question">{ question }</p>

          <div className="dropdown-area">

            <div className="dropdown">
              <p className="drop-button-dots">* * *</p>
              <ul className="dropdown-content">
                <li className="dropdown-options" onClick={() => openModal({ editQuestion: qId })}>
                  Edit Question
                </li>

                <li className="dropdown-options" onClick={() => deleteQuestion(qId)}>
                  Delete Question
                </li>

              </ul>
            </div>
          </div>
          {answersToQuestion.map((answer, i) => (
            <div className="question-answer-item" key={answer.id}>
              <p>{answer.answer}</p>
              {/*  */}
              <div className="dropdown-area">

                <div className="dropdown">
                  <p className="drop-button-dots">* * *</p>
                  <ul className="dropdown-content">
                    <li className="dropdown-options" onClick={() => openModal({ editAnswer: aId[i] })}>
                      Edit Answer
                    </li>

                    <li className="dropdown-options" onClick={() => deleteAnswer(aId[i])}>
                      Delete Answer
                    </li>
                  </ul>
                </div>

              </div>
              {/*  */}

            </div>
          ))}

        </div>
      </div>
    );
  }
}

export default QuestionPage;
