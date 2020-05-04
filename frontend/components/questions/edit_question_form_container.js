import React from 'react';
import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { updateQuestion } from '../../actions/question_actions';
import { closeModal } from '../../actions/modal_actions';

class EditQuestionForm extends React.Component {

  render() {
    const {
      errors, currentUser, name, action, closeModal, question, formType
    } = this.props;
    return (
      <QuestionForm
        errors={errors}
        currentUser={currentUser}
        name={name}
        action={action}
        closeModal={closeModal}
        question={question}
        formType={formType}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const question = state.entities.questions[Object.values(state.ui.modal)[0]];
  return ({
    errors: state.errors.session,
    currentUser: state.entities.users[state.session.id],
    name: state.entities.users[state.session.id].first_name,
    formType: 'Update Question',
    question,
  });
};

const mapDispatchToProps = (dispatch) => ({
  action: (questionId) => dispatch(updateQuestion(questionId)),
  fetchQuestion: (question) => dispatch(fetchQuestion(question)),
  removeErrors: () => dispatch(removeErrors()),
  closeModal: () => dispatch(closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditQuestionForm);
