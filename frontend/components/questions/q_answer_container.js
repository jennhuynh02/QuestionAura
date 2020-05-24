import { connect } from 'react-redux';
import qAnswer from './q_answer';
import { fetchQuestions } from '../../actions/question_actions';
import { openModal } from '../../actions/modal_actions';
import { deleteAnswer } from '../../actions/answer_actions';
import { fetchUsers } from '../../actions/user_action';

const mapStateToProps = (state, { answer }) => ({
  questions: Object.values(state.entities.questions),
  currentUser: state.entities.users[state.session.id],
  users: Object.values(state.entities.users),
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  deleteAnswer: (id) => dispatch(deleteAnswer(id)),
  openModal: (modal) => dispatch(openModal(modal)),
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(qAnswer);
