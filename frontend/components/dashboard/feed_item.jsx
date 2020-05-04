import React from 'react';

const FeedItem = ({
  question, deleteQuestion, openModal, answers,
}) => {
  let a = null;
  for (let i = 0; i < answers.length; i++) {
    if (question.id === answers[i].question_id) {
      a = answers[i].answer;
      break;
    }
  }
  console.log(a);
  return (
    <div className="feed-item">
      <p id="feed-question">
      { question.ask }  
      </p>
      <button
        type="button"
        onClick={(question) => openModal({ editQuestion: question.id })}>
        Edit Question
      </button>

      <button
        type="button"
        onClick={() => deleteQuestion(question.id)}
      >
        Delete Question
      </button>

      <br/>

      { a }


    </div>
  );
};


export default FeedItem;
