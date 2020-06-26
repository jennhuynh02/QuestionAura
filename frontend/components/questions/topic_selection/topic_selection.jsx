import React from 'react';

class TopicSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toAssociate: [],
    };
    this.addOrRemoveAssocation.bind(this);
    this.addTopicsToQuestion.bind(this);
  }

  addOrRemoveAssocation(id) {
    const oldToAssociate = this.state.toAssociate;
    let inside = false;
    const newToAssociate = [];
    for (let i = 0; i < oldToAssociate.length; i += 1) {
      if (oldToAssociate[i] !== id) {
        newToAssociate.push(oldToAssociate[i]);
      } else {
        inside = true;
      }
    }
    if (!inside) {
      newToAssociate.push(id);
    }
    // setting state to new array of topic ids to be associated with this submitted question
    this.setState({
      toAssociate: newToAssociate,
    });
  }

  addTopicsToQuestion(questionId) {
    const { createQuestionTopic, closeModal } = this.props;
    const { toAssociate } = this.state;

    for (let i = 0; i < toAssociate.length; i += 1) {
      const questionTopic = {
        question_id: questionId,
        topic_id: toAssociate[i],
      };
      console.log(questionTopic);
      createQuestionTopic(questionTopic);
    }
    closeModal();
  }

  render() {
    console.log(this.state.toAssociate);
    const { question, topics, closeModal } = this.props;
    const { ask } = question;
    return (
      <div>
        <div className="question-header">
          <h1 className="question-form-topics-header">Edit Topics</h1>
        </div>
        <form id="question-form">
          <div className="inside-question-topic-form">
            <p className="question-topic-instructions">
              Your question has been submitted!
              <br />
              Make sure this question has the right topics:
            </p>
            <p className="question-on-topics-form">
              {ask}
            </p>
            <div>
              {topics.map((el) => (
                <label className="container" key={el.id}>
                  <p className="topic-label">
                    {el.name}
                  </p>
                  <input
                    type="checkbox"
                    value={el.id}
                    onClick={() => this.addOrRemoveAssocation(el.id)}
                  />
                  <span className="checkmark" />
                </label>
              ))}
            </div>

          </div>
          <div id="cancel-or-submit-question-section">
            <button className="cancel-button" onClick={(e) => closeModal(e)}>Cancel</button>
            <button className="ask-question-button" onClick={() => this.addTopicsToQuestion(question.id)}>Done</button>
          </div>
        </form>
      </div>
    );
  }
}

export default TopicSelection;
