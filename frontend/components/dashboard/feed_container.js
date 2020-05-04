import { connect } from 'react-redux';
import Feed from './feed';
import { fetchQuestions, deleteQuestion } from '../../actions/question_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchAnswer, fetchAnswers } from '../../actions/answer_actions';

const mapStateToProps = (state) => ({
  questions: Object.values(state.entities.questions),
  answers: Object.values(state.entities.answers),
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  fetchAnswers: () => dispatch(fetchAnswers()),
  // fetchAnswer: (answer) => dispatch(fetchAnswer(answer)),
  deleteQuestion: (question) => dispatch(deleteQuestion(question)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
