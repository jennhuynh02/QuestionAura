import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchUsers } from '../../actions/user_action';
import { fetchQuestions } from '../../actions/question_actions';
import { fetchAnswers } from '../../actions/answer_actions';
import { fetchTopics } from '../../actions/topic_actions';

const mapStateToProps = (state) => ({
  first: state.entities.users[state.session.id].first_name,
  second: state.entities.users[state.session.id].last_name,
  users: state.entities.users,
  questions: Object.values(state.entities.questions),
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchQuestions: () => dispatch(fetchQuestions()),
  fetchAnswers: () => dispatch(fetchAnswers()),
  fetchTopics: () => dispatch(fetchTopics()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
