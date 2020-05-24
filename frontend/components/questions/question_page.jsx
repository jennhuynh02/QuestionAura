import React from 'react';
import AnswerFormContainer from '../answer/answer_form_container';
import AnswerContainer from './q_answer_container';
import Header from '../header/header_container';

class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
    this.questionString = '';
    this.question = '';
    this.answer = '';
    this.users = this.props.users;
  }

  componentDidMount() {
    this.props.fetchQuestion({ id: this.props.questionId });
    this.props.fetchAnswers();
    this.props.fetchUsers();
  }

  getQuestionDropdown() {
    const { currentUser } = this.props;
    if (currentUser.id === this.question.asker_id) {
      return (
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
      );
    }
    return (
      <div className="dropdown">
        <p className="drop-button-dots">* * *</p>
        <ul className="dropdown-content">

          <li className="dropdown-options" onClick={() => openModal({ answer: qId })}>
            Answer
          </li>

        </ul>
      </div>
    );
  }

  render() {
    const {
      questions, answers, questionId, openModal, deleteQuestion, deleteAnswer,
    } = this.props;

    let q;
    let qId;

    for (let i = 0; i < questions.length; i++) {
      qId = questions[i].id;
      if (qId === questionId) {
        this.questionString = questions[i].ask;
        this.question = questions[i];
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
          <p className="question-page-question">{ this.questionString }</p>

          <div className="dropdown-area">
            { this.getQuestionDropdown() }
          </div>
          <div className="answers-count">
            {answersToQuestion.length}
            + Answers
          </div>
          {answersToQuestion.map((answer) => (
            <AnswerContainer answer={answer} key={answer.id} users={this.users} />
          ))}

        </div>
      </div>
    );
  }
}

export default QuestionPage;
