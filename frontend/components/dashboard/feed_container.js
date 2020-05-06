import { connect } from 'react-redux';
import Feed from './feed';
import { deleteQuestion } from '../../actions/question_actions';
import { openModal } from '../../actions/modal_actions';
import { createAnswer, fetchAnswers } from '../../actions/answer_actions';
import { fetchUser } from '../../actions/user_action';

const mapStateToProps = (state) => ({
  questions: Object.values(state.entities.questions),
  answers: Object.values(state.entities.answers),
  first: state.entities.users[state.session.id].first_name,
  last: state.entities.users[state.session.id].last_name,
  users: Object.values(state.entities.users),
});

const mapDispatchToProps = (dispatch) => ({
  fetchAnswers: () => dispatch(fetchAnswers()),
  createAnswer: () => dispatch(createAnswer()),
  fetchUser: () => dispatch(fetchUser()),
  deleteQuestion: (question) => dispatch(deleteQuestion(question)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
