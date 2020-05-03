import React from 'react';
import { connect } from 'react-redux';
import QuestionForm from './question_form';

class EditQuestionForm extends React.Component {

  render() {
    const {
      errors, currentUser, name, askQuestion, closeModal, question,
    } = this.props;
    return (
      <QuestionForm
        errors={errors}
        currentUser={currentUser}
        name={name}
        askQuestion={askQuestion}
        closeModal={closeModal}
        question={question}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const question = state.entities.questions[Object.values(state.ui.modal)[0]];
  return ({
    errors: state.errors.session,
    currentUser: state.entities.users[state.session.id],
    question,
  });
};

const mapDispatchToProps = (dispatch) => ({
  action: (question) => dispatch(updateQuestion(question)),
  fetchQuestion: (question) => dispatch(fetchQuestion(question)),
  removeErrors: () => dispatch(removeErrors()),
  closeModal: () => dispatch(closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditQuestionForm);
