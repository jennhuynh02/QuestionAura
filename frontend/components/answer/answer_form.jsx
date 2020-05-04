import React from 'react';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      responder_id: '',
      question_id: '',
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
      <div> Answer Form
        <form onSubmit={this.handleSubmit}>
          <p>{this.props.first} {this.props.last}</p>
          <input
            type="text"
            value={this.state.answer}
            onChange={this.update('answer')}
            placeholder="Write your answer"
            className="answer-input"
          />
          <div id="cancel-or-submit-answer-section">
          <button>{this.props.formType}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AnswerForm;
