import React from 'react';
import { connect } from 'react-redux';
import AnswerForm from './answer_form';
import { updateAnswer } from '../../actions/answer_actions';
import { closeModal } from '../../actions/modal_actions';

class EditAnswerForm extends React.Component {
  
  render() {
    const { errors, currentUser, first, last, action, closeModal, answer, formType, questionId } = this.props;
    let id = answer.id;
    return (
    <AnswerForm    
      errors={errors}
      currentUser={answer.responder_id}
      first={first}
      last={last}
      action={action}
      closeModal={closeModal}
      answer={answer}
      formType={formType}
      answerId={id}
      questionId={answer.question_id}
    />
    );
  }
}

const mapStateToProps = (state) => {
  const answer = state.entities.answers[Object.values(state.ui.modal)[0]];
  return ({
    errors: state.errors.session,
    currentUser: state.entities.users[state.session.id],
    first: state.entities.users[state.session.id].first_name,
    last: state.entities.users[state.session.id].last_name,
    formType: 'Update Answer',
    answer,
  });
};

const mapDispatchToProps = (dispatch) => ({
  action: (answer) => dispatch(updateAnswer(answer)),
  fetchAnswer: (answer) => dispatch(fetchAnswer(answer)),
  removeErrors: () => dispatch(removeErrors()),
  closeModal: () => dispatch(closeModal()),
});


export default connect(mapStateToProps, mapDispatchToProps)(EditAnswerForm);
