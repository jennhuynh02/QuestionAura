import React from 'react';
// import AnswerFormContainer from '../answer/answer_form_container';

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

    const { question, deleteQuestion, openModal, answers, first, last } = this.props;

    let a = null;
    let answerId = null;
    for (let i = 0; i < answers.length; i++) {
      if (question.id === answers[i].question_id) {
        a = answers[i].answer;
        answerId = answers[i].id;
        break;
      }
    }

    let questionId = question.id;


    return (

      <div className="feed-item">
        <p className="feed-header">Answer * Recommended for you</p>
        <p className="feed-header">{first} {last}</p>
        <p className="feed-question" onClick={this.handleQuestionLink}>{ question.ask }</p>
        <button onClick={() => openModal({ editQuestion: questionId })}>Edit Question</button>
        <button onClick={() => deleteQuestion(questionId)}>Delete Question</button>

        <br/>
        <p className="feed-answer">
        { a }  
        </p>
        <br />
        {/* <AnswerFormContainer questionId={questionId} /> */}
  
        <button onClick={() => openModal({ answer: questionId })}>Answer</button>
        <button onClick={() => openModal({ editAnswer: answerId })}>Edit Answer</button>
        <button onClick={() => deleteAnswer(answerId)}>Delete Answer</button>

      </div>
    );
  }
}


export default FeedItem;