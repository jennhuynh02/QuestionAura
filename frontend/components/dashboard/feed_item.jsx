import React from 'react';
import AnswerFormContainer from '../answer/answer_form_container';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleQuestionLink = this.handleQuestionLink.bind(this);
  }


  handleQuestionLink(e) {
    e.preventDefault();
    location.href = `/#/questions/${this.props.question.id}`;
  };


  render() {

    const { question, deleteQuestion, openModal, answers, users } = this.props;
    let a = null;
    let answerId = null;
    let answerObject;
    for (let i = 0; i < answers.length; i++) {
      if (question.id === answers[i].question_id) {
        answerObject = answers[i];
        a = answers[i].answer;
        answerId = answers[i].id;
        break;
      }
    }
    let responder
    let responderFirst
    let responderLast
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === answerObject.responder_id) {
        responder = users[i];
        responderFirst = users[i].first_name;
        responderLast = users[i].last_name;
        break;
      }
    }

    let questionId = question.id;


    return (

      <div className="feed-item">
        <p className="feed-header">Answer * Recommended for you</p>
        <p className="feed-header">{responderFirst} {responderLast}</p>

        <p className="feed-question" onClick={this.handleQuestionLink}>{ question.ask }</p>
        <button onClick={() => openModal({ editQuestion: questionId })}>Edit Question</button>
        <button onClick={() => deleteQuestion(questionId)}>Delete Question</button>

        <br/>
        <p className="feed-answer">
        { a }  
        </p>
        {/* <AnswerFormContainer questionId={questionId} /> */}

        <button onClick={() => openModal({ answer: questionId })}>Answer</button>
        <button onClick={() => openModal({ editAnswer: answerId })}>Edit Answer</button>
        <button onClick={() => deleteAnswer(answerId)}>Delete Answer</button>
        
        <br/>
      <AnswerFormContainer questionId={questionId} />

      </div>
    );
  }
}


export default FeedItem;