import { connect } from 'react-redux';
import Feed from './feed';
import { fetchQuestions, deleteQuestion } from '../../actions/question_actions';
import { openModal } from '../../actions/modal_actions';
import { createAnswer, fetchAnswers } from '../../actions/answer_actions';

const mapStateToProps = (state) => ({
  questions: Object.values(state.entities.questions),
  answers: Object.values(state.entities.answers),
  first: state.entities.users[state.session.id].first_name,
  last: state.entities.users[state.session.id].last_name,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  fetchAnswers: () => dispatch(fetchAnswers()),
  // fetchResponder: () => d
  createAnswer: () => dispatch(createAnswer()),
  deleteQuestion: (question) => dispatch(deleteQuestion(question)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
