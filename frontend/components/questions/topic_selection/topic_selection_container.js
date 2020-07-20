import { connect } from 'react-redux';
import TopicSelection from './topic_selection';
import { closeModal } from '../../../actions/modal_actions';
import { createQuestionTopic, deleteQuestionTopic } from '../../../actions/question_topic_actions';
import { fetchQuestions } from '../../../actions/question_actions';

const mapStateToProps = (state, { associated = [] }) => ({
  errors: state.questions.errors,
  associated,
  questions: Object.values(state.entities.questions),
});

const mapDispatchToProps = (dispatch) => ({
  createQuestionTopic: (questionTopic) => dispatch(createQuestionTopic(questionTopic)),
  deleteQuestionTopic: (questionTopic) => dispatch(deleteQuestionTopic(questionTopic)),
  fetchQuestions: () => dispatch(fetchQuestions()),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicSelection);
