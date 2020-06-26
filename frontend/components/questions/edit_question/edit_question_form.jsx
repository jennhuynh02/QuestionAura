import React from 'react';

class EditQuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ask: this.props.question.ask,
      asker_id: this.props.currentUser,
      id: this.props.question.id,
      topicToggle: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  handleQuestion(e) {
    e.preventDefault();
    // this.setState({
    //   topicToggle: !this.state.topicToggle
    // });
    // .then(this.props.closeModal);
  }

  handleSubmit(e) {
    e.preventDefault();
    const question = { ...this.state };
    this.props.action(question)
    this.props.closeModal();
    // this.setState({
    //     topicToggle: !this.state.topicToggle
    //   });
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
    // if (this.state.topicToggle === false) {
    //   return (
    //     <div>
    //       <TopicSelection topics={this.props.topics} question={this.props.questions[0]} />
    //     </div>
    //   );
    // }
    return (
      <div>
        <div className="question-header">
          <h1 className="question-form-name">Edit Question Form</h1>
        </div>
        <form id="question-form">
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
            <button className="cancel-button" onClick={(e) => this.props.closeModal(e)}>Cancel</button>
            <button className="ask-question-button" onClick={(e) => this.handleSubmit(e)}>{this.props.formType}</button>
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


export default EditQuestionForm;
