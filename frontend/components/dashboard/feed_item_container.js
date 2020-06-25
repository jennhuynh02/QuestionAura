import { connect } from 'react-redux';
import { deleteQuestion } from '../../actions/question_actions';
import { openModal } from '../../actions/modal_actions';
import { createAnswer, deleteAnswer } from '../../actions/answer_actions';
import FeedItem from './feed_item';

const mapStateToProps = (state, { question }) => ({
  answers: Object.values(state.entities.answers),
  users: Object.values(state.entities.users),
  currentUser: state.entities.users[state.session.id],
  question,
});

const mapDispatchToProps = (dispatch) => ({
  createAnswer: () => dispatch(createAnswer()),
  deleteQuestion: (question) => dispatch(deleteQuestion(question)),
  deleteAnswer: (answer) => dispatch(deleteAnswer(answer)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedItem);