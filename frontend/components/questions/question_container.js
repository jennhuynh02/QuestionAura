import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { createQuestion } from '../../actions/question_actions';

const mapStateToProps = (state) => ({
  errors: state.question.errors,
  currentUser: state.session.id,
});

const mapDispatchToProps = (dispatch) => ({
  askQuestion: (question) => dispatch(createQuestion(question)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
