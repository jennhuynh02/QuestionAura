import React from 'react';

const FeedItem = ({ question, deleteQuestion }) => {

  return (
    <div className="feed-item">
      { question.ask }
      <button onClick={() => deleteQuestion(question.id)}>Delete Question</button>
    </div>
  );
};


export default FeedItem;
