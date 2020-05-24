import { connect } from 'react-redux';
import { deleteQuestion } from '../../actions/question_actions';
import { openModal } from '../../actions/modal_actions';
import { createAnswer, fetchAnswers } from '../../actions/answer_actions';
import { fetchUsers } from '../../actions/user_action';
import FeedItem from './feed_item';

const mapStateToProps = (state, { question }) => ({
  answers: Object.values(state.entities.answers),
  users: Object.values(state.entities.users),
  currentUser: state.entities.users[state.session.id],
  question,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAnswers: () => dispatch(fetchAnswers()),
  createAnswer: () => dispatch(createAnswer()),
  fetchUsers: () => dispatch(fetchUsers()),
  deleteQuestion: (question) => dispatch(deleteQuestion(question)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedItem);