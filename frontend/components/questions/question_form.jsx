import React from 'react';
import TopicSelection from './topic_selection';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ask: this.props.question.ask,
      asker_id: this.props.currentUser,
      id: this.props.question.id,
      topic_id: '',
      topicToggle: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  handleQuestion(e) {
    e.preventDefault();
    this.setState({
      topicToggle: !this.state.topicToggle
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const question = { ...this.state };
    this.props.action(question)
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

  showForm() {
    if (this.state.topicToggle === false) {
      return (
      <div>
        <div className="question-header">
          <h1 className="question-form-topics-header">Edit Topics</h1>
        </div>
        <form id="question-form" onSubmit={this.handleSubmit}>
          <div className="inside-question-topic-form">
            <p className="question-topic-instructions">
              Make sure this question has the right topics:
            </p>
            <p className="question-on-topics-form">
              {this.state.ask}
            </p>
        <div>
          <TopicSelection topics={this.props.topics} topicId={this.state.topic_id} update={this.update('topic_id')} />
        </div>

          </div>
          <div id="cancel-or-submit-question-section">
            <button className="cancel-button" onClick={(e) => this.props.closeModal(e)}>Cancel</button>
            <button className="ask-question-button">Done</button>
          </div>
        </form>
      </div>
      );
    }
    return (
      <div>
        <div className="question-header">
          <h1 className="question-form-name">Question Form</h1>
        </div>
        <form id="question-form" onSubmit={this.handleQuestion}>
          <div className="inside-question-form">

            <p className="question-author">
              {this.props.first}
              {' '}
              {this.props.last}
              {' '}
              asked
            </p>
            <input
              type="text"
              value={this.state.ask}
              onChange={this.update('ask')}
              placeholder="Start your question with ''What'', ''How'', ''Why'', etc."
              className="question-input"
            />

          </div>
          <div id="cancel-or-submit-question-section">
            <button className="cancel-button" onClick={(e) => closeModal(e)}>Cancel</button>
            <button className="ask-question-button" onClick={(e) => this.handleQuestion(e)}>{this.props.formType}</button>
          </div>
        </form>
      </div>
    );
  }


  render() {
    const { closeModal, topics } = this.props;

    return (
      <div>
        <div className="question-box">
          {this.showForm()}
        </div>
      </div>
    );
  }
}


export default QuestionForm;
