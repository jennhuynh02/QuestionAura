import React from 'react';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    console.log('answerform');
    console.log(this.props.questionId);
    this.state = {
      answer: this.props.answer.answer,
      responder_id: this.props.currentUser,
      question_id: this.props.questionId,
      id: this.props.answer.id,
      photoUrl: null,
      photoFile: null,
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  handleCancel(e) {
    this.props.closeModal(e);
  }

  handleFile(e) {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        photoFile: file,
        photoUrl: fileReader.result,
      });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append('answer[answer]', this.state.answer);
    formData.append('answer[responder_id]', this.state.responder_id);
    formData.append('answer[question_id]', this.state.question_id);
    if (this.state.photoFile) {
      formData.append('answer[photo]', this.state.photoFile);
    }
    this.props.action(formData)
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
    console.log(this.state)
    const { closeModal } = this.props;
    const preview = this.state.photo ? <img src={this.state.photo} /> : null
    return (
      <div className="question-box">
        <div className="question-header">
          <h1 className="question-form-name">Answer Form</h1>
        </div>
        <form id="question-form" onSubmit={this.handleSubmit}>
          <div className="inside-question-form">

            <p className="question-author">
              {this.props.first}
              {' '}
              {this.props.last}
            </p>
            <input
              type="text"
              value={this.state.answer}
              onChange={this.update('answer')}
              placeholder="Write your answer"
              className="question-input"
            />
            <input
              type="file"
              onChange={this.handleFile}
            />
            { preview }
          </div>
          <div id="cancel-or-submit-question-section">
            <button className="cancel-button" onClick={(e) => closeModal(e)}>Cancel</button>
            <button className="ask-question-button">{this.props.formType}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AnswerForm;
