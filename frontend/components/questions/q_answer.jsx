import React from 'react';
import AnswerFormContainer from '../answer/answer_form_container';
import getDate from '../../util/date_util';

class qAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.responder = '';
    this.responderFirst = '';
    this.responderLast = '';
  }

  componentDidMount() {
  }

  getAnswerDropdown(answer) {
    const { currentUser, openModal, deleteAnswer } = this.props;
    if (currentUser.id === answer.responder_id) {
      return (
        <div className="dropdown">
          <p className="drop-button-dots">* * *</p>
          <ul className="dropdown-content">

            <li className="dropdown-options" onClick={() => openModal({ editAnswer: answer.id })}>
              Edit Answer
            </li>

            <li className="dropdown-options" onClick={() => deleteAnswer(answer.id)}>
              Delete Answer
            </li>

          </ul>
        </div>
      );
    }
  }

  render() {
    const { answer } = this.props;
    const date = getDate(answer.created_at);

    return (
      <div className="question-answer-item" key={answer.id}>
        <div className="feed-author-name">

          {answer.responder.first_name}
          {' '}
          {answer.responder.last_name}

          <p className="date">
            Answered
            {' '}
            {date}
          </p>
        </div>

        <p className="answer-text">{answer.answer}</p>
        <img className="image-dashboard" src={answer.photoUrl} />
        <div className="dropdown-area">
          {this.getAnswerDropdown(answer)}
        </div>
      </div>
    );
  }
}

export default qAnswer;
