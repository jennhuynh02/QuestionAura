import React from 'react';
import AnswerContainer from './q_answer_container';
import HeaderContainer from '../header/header_container';
import { Link } from 'react-router-dom';

class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
    this.questionString = '';
    this.question = '';
    this.answer = '';
    this.users = this.props.users;
    this.asker = '';
    this.askerFirst = '';
    this.askerLast = '';
    this.topics = [];
  }

  componentDidMount() {
    const { fetchAnswers, fetchUsers, fetchTopics, fetchQuestion, questionId } = this.props;
    fetchQuestion(questionId);
    fetchAnswers();
    fetchUsers();
    fetchTopics();
  }

  getQuestionDropdown() {
    const { currentUser, openModal } = this.props;

    if (currentUser.id === this.question.asker_id) {
      return (
        <div className="dropdown">
          <p className="drop-button-dots">* * *</p>
          <ul className="dropdown-content">

            <li className="dropdown-options" onClick={() => openModal({ editQuestion: this.question.id })}>
              Edit Question
            </li>

            <li className="dropdown-options" onClick={() => deleteQuestion(this.question.id)}>
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

          <li className="dropdown-options" onClick={() => openModal({ answer: this.question.id })}>
            Answer
          </li>

        </ul>
      </div>
    );
  }

  render() {
    const {
      questions, answers, questionId, openModal, deleteQuestion, deleteAnswer, users, first, second,
    } = this.props;

    let qId;

    for (let i = 0; i < questions.length; i++) {
      qId = questions[i].id;
      if (qId === questionId) {
        this.topics = questions[i].topics;
        this.questionString = questions[i].ask;
        this.question = questions[i];
        break;
      }
    }

    for (let i = 0; i < users.length; i += 1) {
      if (users[i].id === this.question.asker_id) {
        this.asker = users[i];
        this.askerFirst = users[i].first_name;
        this.askerLast = users[i].last_name;
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
        <HeaderContainer first={first} second={second} />
        <div className="question-page-box">
          <p className="question-page-author-name">
            {this.topics ? 
            this.topics.map((topic) => (
              <Link className="link" to={`/topics/${topic.name}`}>
              <span className="topic-tags" key={topic.id}>{topic.name}</span>
              </Link>
            )) : <p></p>}
            {/* Question asked by:
            {' '}
            {this.askerFirst}
            {' '}
            {this.askerLast} */}
          </p>
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
