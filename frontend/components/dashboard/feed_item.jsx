import React from 'react';

const FeedItem = ({ question, deleteQuestion, openModal }) => (
  <div className="feed-item">
    { question.ask }
    <button onClick={() => openModal({ 'editQuestion': question.id })}>Edit Question</button>
    <button onClick={() => deleteQuestion(question.id)}>Delete Question</button>
  </div>
);


export default FeedItem;
