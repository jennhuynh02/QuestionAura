import React from 'react';
import AnswerFormContainer from '../answer/answer_form_container';

class QuestionPage extends React.Component {

  componentDidMount() {
    this.props.fetchQuestion({ id: this.props.questionId });
    this.props.fetchAnswers();
  }

  render() {
    const { questions, answers, questionId, openModal, deleteQuestion } = this.props;

    let question;
    let q;
    let qId;

    for (let i = 0; i < questions.length; i++) {
      question = questions[i].ask;
      q = questions[i];
      qId = questions[i].id;
    };

    let answersToQuestion = [];
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].question_id === questionId) {
        answers[i].id = answers[i].id
        answersToQuestion.push(answers[i]);
      }
    };
    
    return (
    <div className="feed-item">
      <p className="feed-question">{ question }</p>
      <button onClick={() => openModal({ 'editQuestion': qId })}>Edit Question</button>
      <button onClick={() => deleteQuestion(q.id)}>Delete Question</button>

      <AnswerFormContainer questionId={questionId} />
        {answersToQuestion.map((answer) => (
        <div key={answer.id}>
        <p>{answer.answer}</p>
        <button onClick={() => openModal({ 'editAnswer': answer.id })}>Edit Answer</button>
        <button onClick={() => deleteAnswer(answer.id)}>Delete Answer</button>  
        </div>
      ))}
        
      </div>
    );
  }
}

export default QuestionPage;