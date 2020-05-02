import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { createQuestion } from '../../actions/question_actions';
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => ({
  errors: state.question.errors,
  currentUser: state.session.id,
  name: state.entities.users[state.session.id].first_name,
});

const mapDispatchToProps = (dispatch) => ({
  askQuestion: (question) => dispatch(createQuestion(question)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
