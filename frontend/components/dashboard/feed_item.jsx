import React from 'react';
import AnswerFormContainer from '../answer/answer_form_container';
// import { fetchUser } from "../../actions/user_action";

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleQuestionLink = this.handleQuestionLink.bind(this);
  }


  handleQuestionLink(e) {
    e.preventDefault();
    location.href = `/#/questions/${this.props.question.id}`;
  }


  render() {
    const {
      question, deleteQuestion, openModal, answers, users,
    } = this.props;
    let a = '';
    let answerId = '';
    let photo;

    let responderId;
    for (let i = 0; i < answers.length; i++) {
      if (question.id === answers[i].question_id) {
        responderId = answers[i].responder_id;
        a = answers[i].answer;
        if (answers[i].photoUrl) {
          photo = answers[i].photoUrl;
        }
        answerId = answers[i].id;
        break;
      }
    }

    let responder;
    let responderFirst;
    let responderLast;

    for (let i = 0; i < users.length; i++) {
      if (users[i].id === responderId) {
        responder = users[i];
        responderFirst = users[i].first_name;
        responderLast = users[i].last_name;
        break;
      }
    }

    const questionId = question.id;


    return (

      <div className="feed-item">
        <p className="feed-header">Answer * Recommended for you</p>
        <p className="feed-header">
          {responderFirst}
          {' '}
          {responderLast}
        </p>

        <p className="feed-question" onClick={this.handleQuestionLink}>{ question.ask }</p>

        <p className="feed-answer">
          { a }
          <p> <img className="image-dashboard" src={photo} /> </p>
        </p>

        <div className="dropdown-area">

          <div className="dropdown">
            <p className="drop-button-dots">* * *</p>
            <ul className="dropdown-content">
              <li className="dropdown-options" onClick={() => openModal({ editQuestion: questionId })}>
                Edit Question
              </li>

              <li className="dropdown-options" onClick={() => deleteQuestion(questionId)}>
                Delete Question
              </li>

              <li className="dropdown-options" onClick={() => openModal({ answer: questionId })}>
                Answer
              </li>

              <li className="dropdown-options" onClick={() => openModal({ editAnswer: answerId })}>
                Edit Answer
              </li>

              <li className="dropdown-options" onClick={() => deleteAnswer(answerId)}>
                Delete Answer
              </li>
            </ul>
          </div>

        </div>

        {/* <AnswerFormContainer questionId={questionId} /> */}

      </div>
    );
  }
}


export default FeedItem;
