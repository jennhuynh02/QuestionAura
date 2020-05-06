import React from 'react';
import FeedItem from './feed_item';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAnswers();
  }


  render() {
    const {
      deleteQuestion, openModal, createAnswer, answers, questions, first, last, users
    } = this.props;
    return (
      <div>
        {questions.map((question) => (
          <FeedItem question={question} key={question.id} deleteQuestion={deleteQuestion} openModal={openModal} createAnswer={createAnswer} answers={answers} first={first} last={last} users={users} />
        ))}
      </div>

    );
  }
}

export default Feed;
