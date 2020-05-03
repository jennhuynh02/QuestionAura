import React from 'react';
import FeedItem from './feed_item';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    const { deleteQuestion } = this.props;
    return (
      <div>
        {this.props.questions.map((question) => (
          <FeedItem question={question} key={question.id} deleteQuestion={deleteQuestion} />
        ))}
      </div>
    );
  }
}

export default Feed;
