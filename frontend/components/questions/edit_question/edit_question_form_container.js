import { connect } from 'react-redux';
import EditQuestionForm from './edit_question_form';
import { updateQuestion, fetchQuestions } from '../../../actions/question_actions';
import { closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state) => {
  const question = state.entities.questions[Object.values(state.ui.modal)[0]];
  return {
    errors: state.errors.session,
    currentUser: state.entities.users[state.session.id],
    first: state.entities.users[state.session.id].first_name,
    last: state.entities.users[state.session.id].last_name,
    topics: Object.values(state.entities.topics),
    formType: 'Update Question',
    question,
  };
};

const mapDispatchToProps = (dispatch) => ({
  action: (questionId) => dispatch(updateQuestion(questionId)),
  fetchQuestions: () => dispatch(fetchQuestions()),
  removeErrors: () => dispatch(removeErrors()),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestionForm);
