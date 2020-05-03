import { connect } from 'react-redux';
import EditQuestionForm from './edit_question_form';
import { updateQuestion } from '../../actions/question_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, { question }) => ({
  errors: state.questions.errors,
  currentUser: state.session.id,
  question,
});

const mapDispatchToProps = (dispatch) => ({
  updateQuestion: (question) => dispatch(updateQuestion(question)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestionForm);
