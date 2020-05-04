import React from 'react';

class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestion({ id: this.props.questionId });
    this.props.fetchAnswers();
  }

  render() {
    const { questions, answers } = this.props;
    let question;
    let q
    for (let i = 0; i < questions.length; i++) {
      question = questions[i].ask;
      q = questions[i];
    };

    for (let i = 0; i < answers.length; i++) {

    };


    return (
      <div className="feed-item">
        {question}

      </div>
    );
  }
}

export default QuestionPage;
