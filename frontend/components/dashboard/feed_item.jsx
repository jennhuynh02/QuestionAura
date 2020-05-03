import React from 'react';

const FeedItem = ({ question, deleteQuestion, openModal }) => {

  return (
    <div className="feed-item">
      { question.ask }
      <button onClick={(question) => openModal('editQuestion', question={question})}>Edit Question</button>
      <button onClick={() => deleteQuestion(question.id)}>Delete Question</button>
    </div>
  );
};


export default FeedItem;
