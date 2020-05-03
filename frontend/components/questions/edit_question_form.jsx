import React from 'react';

class EditQuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ask: '',
      asker_id: '',
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
    const question = { ...this.state };
    this.props.updateQuestion(question)
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
      <div className="question-box">
        <form id="question-form" onSubmit={this.handleSubmit}>
          <p>{this.props.name} asked</p>
          <input
            type="text"
            value={this.state.ask}
            onChange={this.update('ask')}
            className="question-input"
          />
          <div id="cancel-or-submit-question-section">
          <button className="ask-question-button">Update Question</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditQuestionForm;
