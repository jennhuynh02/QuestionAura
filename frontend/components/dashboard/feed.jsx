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
    const { deleteQuestion, openModal } = this.props;
    return (
      <div>
        {this.props.questions.map((question) => (
          <FeedItem question={question} key={question.id} deleteQuestion={deleteQuestion} openModal={openModal} />
        ))}
      </div>
    );
  }
}

export default Feed;
