import React from 'react';

const FeedItem = ({ question, deleteQuestion, openModal, answers }) => {

  let a = null;
  let answerId = null;
  for (let i = 0; i < answers.length; i++) {
    if (question.id === answers[i].question_id) {
      a = answers[i].answer;
      answerId = answers[i].id;
      break;
    }
  }



  return (

  <div className="feed-item">
    <p className="feed-question">{ question.ask }</p>
    <button onClick={() => openModal({ 'editQuestion': question.id })}>Edit Question</button>
    <button onClick={() => deleteQuestion(question.id)}>Delete Question</button>

    <br/>
    { a }
    <br/>

    <button onClick={() => openModal({ 'editAnswer': answerId })}>Edit Answer</button>
    <button onClick={() => deleteAnswer(answerId)}>Delete Answer</button>    

  </div>
  );
};


export default FeedItem;
