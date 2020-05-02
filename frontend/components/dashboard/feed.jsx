import React from 'react';

class Feed extends React.Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    return (
      <div>
        {this.props.questions.map((q, i) => (
          <li key={`question-{i}`}>{ q.ask }</li>
        ))}
      </div>
    );
  }
}

export default Feed;
