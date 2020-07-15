import { connect } from 'react-redux';

import QuestionPage from './question_page';
import { fetchQuestion, deleteQuestion } from "../../actions/question_actions";
import { fetchAnswers, deleteAnswer } from '../../actions/answer_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchTopics } from "../../actions/topic_actions";

const mapStateToProps = (state, { match }) => ({
  questionId: parseInt(match.params.questionId, 10),
  questions: Object.values(state.entities.questions),
  answers: Object.values(state.entities.answers),
  first: state.entities.users[state.session.id].first_name,
  second: state.entities.users[state.session.id].last_name,
  users: Object.values(state.entities.users),
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
  deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
  fetchAnswers: () => dispatch(fetchAnswers()),
  fetchTopics: () => dispatch(fetchTopics()),
  deleteAnswer: (answerId) => dispatch(deleteAnswer(answerId)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);