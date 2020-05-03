import React from 'react';
import FeedItem from './feed_item';

class Feed extends React.Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    return (
      <div>
        {this.props.questions.map((question) => (
          <FeedItem question={question} key={`question-${question.id}`} deleteQuestion={deleteQuestion}/>
        ))}
      </div>
    );
  }
}

export default Feed;
