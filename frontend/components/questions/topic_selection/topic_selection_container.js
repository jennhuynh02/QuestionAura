import { connect } from 'react-redux';
import TopicSelection from './topic_selection';
import { closeModal } from '../../../actions/modal_actions';
import { createQuestionTopic, deleteQuestionTopic } from '../../../actions/question_topic_actions';

const mapStateToProps = (state, { question, associated }) => ({
  errors: state.questions.errors,
  associated,
});

const mapDispatchToProps = (dispatch) => ({
  createQuestionTopic: (questionTopic) => dispatch(createQuestionTopic(questionTopic)),
  deleteQuestionTopic: (questionTopic) => dispatch(deleteQuestionTopic(questionTopic)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicSelection);
