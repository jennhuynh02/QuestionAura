import React from 'react';
import FeedItemContainer from './feed_item_container';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }


  render() {
    const {
      questions
    } = this.props;

    return (
      <div>
        {questions.map((question) => (
          <FeedItemContainer question={question} key={question.id} />
        ))}
      </div>

    );
  }
}

export default Feed;
