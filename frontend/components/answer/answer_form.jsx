import React from 'react';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: this.props.answer.answer,
      responder_id: this.props.currentUser,
      question_id: this.props.questionId,
      id: this.props.answer.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value,
    });
  }
 
  handleSubmit(e) {
    e.preventDefault();
    const answer = { ...this.state };
    this.props.action(answer)
      .then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="question-box"> Answer Form
        <form id="question-form" onSubmit={this.handleSubmit}>
          <p>{this.props.first} {this.props.last}</p>
          <input
            type="text"
            value={this.state.answer}
            onChange={this.update('answer')}
            placeholder="Write your answer"
            className="question-input"
          />
          <div id="cancel-or-submit-answer-section">
          <button className="ask-question-button">{this.props.formType}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AnswerForm;
