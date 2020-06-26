import React from 'react';
import AnswerFormContainer from '../answer/answer_form_container';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.answer = '';
    this.answerId = '';
    this.questionId = '';
    this.responderId = '';
    this.responder = '';
    this.responderFirst = '';
    this.responderLast = '';
    this.handleQuestionLink = this.handleQuestionLink.bind(this);
  }

  componentDidMount() {
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
            <li className="dropdown-options" onClick={() => this.props.openModal({ editAnswer: this.answerId })}>
              Edit Answer
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
          <li className="dropdown-options" onClick={() => this.props.openModal({ editAnswer: this.answerId })}>
            Edit Answer
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
      question, deleteQuestion, openModal, answers, users, currentUser,
    } = this.props;

    let a = '';
    const answerId = '';
    let photo;

    for (let i = 0; i < answers.length; i++) {
      if (question.id === answers[i].question_id) {
        this.responderId = answers[i].responder_id;
        this.answer = answers[i].answer;
        a = answers[i].answer;
        if (answers[i].photoUrl) {
          photo = answers[i].photoUrl;
        }
        this.answerId = answers[i].id;
        break;
      }
    }

    for (let i = 0; i < users.length; i++) {
      if (users[i].id === this.responderId) {
        this.responder = users[i];
        this.responderFirst = users[i].first_name;
        this.responderLast = users[i].last_name;
        break;
      }
    }

    const photoImageShow = <div className="center-feed-image"><img className="image-dashboard" src={photo} /></div>;

    this.questionId = question.id;

    return (

      <div className="feed-item">
        <p className="feed-header">Answer * Recommended for you</p>
        <p className="feed-author-name">
          {this.responderFirst}
          {' '}
          {this.responderLast}
        </p>

        <p className="feed-question" onClick={this.handleQuestionLink}>{ question.ask }</p>

        <p className="feed-answer">
          { a }
          <br />
          {
            photo
              ? photoImageShow
              : ''
          }

        </p>

        <div className="dropdown-area">

          { this.getDropdown() }
        </div>

      </div>
    );
  }
}


export default FeedItem;
