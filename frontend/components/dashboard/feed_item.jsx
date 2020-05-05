import React from 'react';

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

    const { question, deleteQuestion, openModal, answers } = this.props;

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
        <p className="feed-header">Answer * Recommended for you</p>
        <p className="feed-question" onClick={this.handleQuestionLink}>{ question.ask }</p>
        <button onClick={() => openModal({ editQuestion: question.id })}>Edit Question</button>
        <button onClick={() => deleteQuestion(question.id)}>Delete Question</button>

        <br/>
        <p className="feed-answer">
        { a }  
        </p>
        <br />

        <button onClick={() => openModal({ editAnswer: answerId })}>Edit Answer</button>
        <button onClick={() => deleteAnswer(answerId)}>Delete Answer</button>

      </div>
    );
  }
}


export default FeedItem;