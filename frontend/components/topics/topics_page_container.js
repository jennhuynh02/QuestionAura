import { connect } from 'react-redux';
import TopicPage from './topics_page';

import { fetchQuestion, deleteQuestion, fetchQuestions } from "../../actions/question_actions";
import { fetchAnswers, deleteAnswer } from '../../actions/answer_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchUsers } from '../../actions/user_action';

const mapStateToProps = (state, { match }) => ({
  topicName: match.params.topic,
  topics: Object.values(state.entities.topics),
  questions: Object.values(state.entities.questions),
  answers: Object.values(state.entities.answers),
  users: Object.values(state.entities.users),
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
  deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
  fetchAnswers: () => dispatch(fetchAnswers()),
  fetchUsers: () => dispatch(fetchUsers()),
  deleteAnswer: (answerId) => dispatch(deleteAnswer(answerId)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicPage);