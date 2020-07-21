import React from 'react';
import { Link } from 'react-router-dom';
import AnswerContainer from './q_answer_container';
import HeaderContainer from '../header/header_container';

class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
    this.questionString = '';
    this.question = '';
    this.answer = '';
    this.topics = [];
  }

  componentDidMount() {
    const {
      fetchAnswers, fetchTopics, fetchQuestion, questionId,
    } = this.props;
    fetchQuestion(questionId);
    fetchAnswers();
    fetchTopics();
  }

  getQuestionDropdown() {
    const { currentUser, openModal, deleteQuestion } = this.props;

    if (currentUser.id === this.question.asker_id) {
      return (
        <div className="dropdown">
          <p className="drop-button-dots">* * *</p>
          <ul className="dropdown-content">

            <li className="dropdown-options" onClick={() => openModal({ editQuestion: this.question.id })}>
              Edit Question
            </li>

            {/* <li className="dropdown-options" onClick={() => deleteQuestion(this.question.id)}>
              Delete Question
            </li> */}

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

  handleQuestionLink(e, id) {
    e.preventDefault();
    location.href = `/#/questions/${id}`;
  }

  relatedQuestions() {
    if (this.topics instanceof Object) {
      for (let i = 0; i < this.topics.length; i++) {
        if (this.topics[i].questions) {
          const related = this.topics[i].questions;
          const ids = [this.question.id];
          const filtered = [];
          for (let i = 0; i < related.length; i++) {
            if (!ids.includes(related[i].id)) {
              ids.push(related[i].id);
              filtered.push(related[i]);
            }
          }
          return (
            <div>
              {filtered.map((question) => (
                <div className="related-link-section" key={question.id}>
                  <Link className="related-links" to={`/questions/${question.id}`}>{question.ask}</Link>
                </div>
              ))}
            </div>
          );
        }
      }
    }
  }

  render() {
    const {
      questions, answers, questionId, first, second,
    } = this.props;
    let qId;
    let question = '';
    let firstName = '';
    let lastName = '';

    let topics = [];
    for (let i = 0; i < questions.length; i++) {
      qId = questions[i].id;
      if (qId === questionId) {
        question = questions[i];
        topics = questions[i].topics;
        this.topics = questions[i].topics;
        this.questionString = questions[i].ask;
        this.question = questions[i];
        break;
      }
    }
    if (question instanceof Object) {
      firstName = question.asker.first_name;
      lastName = question.asker.last_name;
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
      <div>
        <HeaderContainer first={first} second={second} />
        <div className="question-page">
          <div className="question-page-box">
            <p className="question-page-author-name">
              {topics
                ? topics.map((topic) => (
                  <Link key={topic.id} className="link" to={`/topics/${topic.name}`}>
                    <span className="topic-tags" key={topic.id}>{topic.name}</span>
                  </Link>
                )) : <p />}
            </p>
            Question asked by:
            {' '}
            {firstName}
            {' '}
            {lastName}
            <p className="question-page-question">{this.questionString}</p>

            <div className="dropdown-area">
              {this.getQuestionDropdown()}
            </div>
            <div className="answers-count">
              {answersToQuestion.length}
              + Answers
            </div>
            {answersToQuestion.map((answer) => (
              <AnswerContainer answer={answer} key={answer.id} />
            ))}

          </div>
          <div className="related-questions">
            <p className="related-questions-title">Related Questions</p>
            {this.relatedQuestions()}
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionPage;
