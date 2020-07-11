import React from 'react';
import AnswerFormContainer from '../answer/answer_form_container';
import getDate from "../../util/date_util";

class qAnswer extends React.Component {
  constructor(props) {
    super(props);
      this.responder = '';
      this.responderFirst = '';
      this.responderLast = '';
  }

  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
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
    const { answer, users } = this.props;

    let date = ''
    for (let i = 0; i < users.length; i += 1) {
      if (users[i].id === answer.responder_id) {
        this.responder = users[i];
        this.responderFirst = users[i].first_name;
        this.responderLast = users[i].last_name;
        date = getDate(answer.created_at);
        break;
      }
    }

    return (
      <div className="question-answer-item" key={answer.id}>
        <p className="feed-author-name">
          {this.responderFirst}
          {' '}
          {this.responderLast}
          
          <p className="date">Answered {date}</p>
        </p>

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
