import { connect } from 'react-redux';
import Feed from './feed';
import { fetchQuestions, deleteQuestion } from '../../actions/question_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
  questions: Object.values(state.entities.questions),
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  deleteQuestion: (question) => dispatch(deleteQuestion(question)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
