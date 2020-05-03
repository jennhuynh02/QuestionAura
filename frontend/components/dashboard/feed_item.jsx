import React from 'react';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { question, deleteQuestion } = this.props;

    return (
      <div className="feed-item">
        { question.ask }
        <button onClick={() => deleteQuestion(question.id)}>Delete Question</button>
      </div>
    );
  }
}


export default FeedItem;
