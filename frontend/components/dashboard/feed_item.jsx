import React from 'react';
import AnswerFormContainer from '../answer/answer_form_container';
import getDate from '../../util/date_util';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.answerId = '';
    this.questionId = '';
    this.responderId = '';
    this.responder = '';
    this.responderFirst = '';
    this.responderLast = '';
    this.handleQuestionLink = this.handleQuestionLink.bind(this);
  }

  getDropdown() {
    if (this.props.question.asker_id === this.props.currentUser.id) {
      if (this.responderId === this.props.currentUser.id) {
        return (
          <div className="dropdown">
            <p className="drop-button-dots">* * *</p>
            <ul className="dropdown-content">
              <li className="dropdown-options" onClick={() => this.props.openModal({ answer: this.props.question.id })}>
                Answer Question
              </li>

              <li className="dropdown-options" onClick={() => this.props.openModal({ editAnswer: this.answerId })}>
                Edit Answer
              </li>

              <li className="dropdown-options" onClick={() => this.props.deleteAnswer(this.answerId)}>
                Delete Answer
              </li>

              <li className="dropdown-options" onClick={() => this.props.openModal({ editQuestion: this.questionId })}>
                Edit Question
              </li>

              <li className="dropdown-options" onClick={() => this.props.deleteQuestion(this.questionId)}>
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
            <li className="dropdown-options" onClick={() => this.props.openModal({ answer: this.props.question.id })}>
              Answer Question
            </li>

            <li className="dropdown-options" onClick={() => this.props.openModal({ editQuestion: this.questionId })}>
              Edit Question
            </li>

            <li className="dropdown-options" onClick={() => this.props.deleteQuestion(this.questionId)}>
              Delete Question
            </li>
          </ul>
        </div>
      );
    }
    if (this.responderId === this.props.currentUser.id) {
      return (
        <div className="dropdown">
          <p className="drop-button-dots">* * *</p>
          <ul className="dropdown-content">
            <li className="dropdown-options" onClick={() => this.props.openModal({ answer: this.props.question.id })}>
              Answer Question
            </li>

            <li className="dropdown-options" onClick={() => this.props.openModal({ editAnswer: this.answerId })}>
              Edit Answer
            </li>

            <li className="dropdown-options" onClick={() => this.props.deleteAnswer(this.answerId)}>
              Delete Answer
            </li>
          </ul>
        </div>
      );
    }
    return (
      <div className="dropdown">
        <p className="drop-button-dots">* * *</p>
        <ul className="dropdown-content">
          <li className="dropdown-options" onClick={() => this.props.openModal({ answer: this.props.question.id })}>
            Answer Question
          </li>
        </ul>
      </div>
    );
  }

  handleQuestionLink(e) {
    e.preventDefault();
    location.href = `/#/questions/${this.props.question.id}`;
  }

  render() {
    const {
      question, answers,
    } = this.props;

    let answer = '';
    let a = '';
    let photo;
    let created = '';

    let questionDate = getDate(question.created_at)

    for (let i = 0; i < answers.length; i++) {
      if (question.id === answers[i].question_id) {
        this.responderId = answers[i].responder_id;
        answer = answers[i];
        a = answers[i].answer;
        created = getDate(answers[i].created_at);
        if (answers[i].photoUrl) {
          photo = answers[i].photoUrl;
        }
        this.answerId = answers[i].id;
        break;
      }
    }
    if (answer instanceof Object) {
      this.responderFirst = answer.responder.first_name;
      this.responderLast = answer.responder.last_name;
    }

    const photoImageShow = <div className="center-feed-image"><img className="image-dashboard" src={photo} /></div>;

    this.questionId = question.id;
    return (

      <div className="feed-item">
        {a.length !== 0
          ? (
            <div>
              <p className="feed-header">Answer · Recommended for you</p>
              <p className="feed-author-name">
                {this.responderFirst}
                {' '}
                {this.responderLast}
                {' · '}
                <span className="date">
                  Updated
                  {' '}
                  {created}
                </span>
              </p>
            </div>
          )
          : (
            <div>
              <p className="feed-header">Be the first to answer this question</p>
              <p className="feed-author-name">
                {question.asker.first_name}
                {' '}
                {question.asker.last_name}
                {' · '}
                <span className="date">
                  Created
                  {' '}
                  {questionDate}
                </span>
              </p>
            </div>
          )}
        <p className="feed-question" onClick={this.handleQuestionLink}>{question.ask}</p>

        <p className="feed-answer">
          {a}
          <br />
          {
            photo
              ? photoImageShow
              : ''
          }

        </p>

        <div className="dropdown-area">

          {this.getDropdown()}
        </div>

      </div>
    );
  }
}

export default FeedItem;
