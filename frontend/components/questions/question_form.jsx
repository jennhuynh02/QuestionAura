import React from 'react';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ask: '',
      asker_id: this.props.currentUser,
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
    this.props.askQuestion(question);
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
      <div>
        <h1>Ask a question:</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.ask}
            onChange={this.update('ask')}
          />
          <button>Ask Question</button>
        </form>
      </div>
    );
  }
}


export default QuestionForm;
