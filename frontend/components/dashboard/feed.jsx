import React from 'react';
import FeedItem from './feed_item';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestions();
    this.props.fetchAnswers();
  }

  render() {
    const {
      deleteQuestion, openModal, fetchAnswer, answers, questions
    } = this.props;
    return (
      <div>
        {this.props.questions.map((question) => (
          <FeedItem question={question} key={question.id} deleteQuestion={deleteQuestion} openModal={openModal} fetchAnswers={fetchAnswers} answers={answers} />
        ))}
      </div>

    );
  }
}

export default Feed;
