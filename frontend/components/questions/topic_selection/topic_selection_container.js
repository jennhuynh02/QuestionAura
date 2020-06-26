import { connect } from 'react-redux';
import TopicSelection from './topic_selection';
import { closeModal } from '../../../actions/modal_actions';
import { createQuestionTopic } from '../../../actions/question_topic_actions';

const mapStateToProps = (state, { question }) => ({
  errors: state.questions.errors,
  topics: Object.values(state.entities.topics),
});

const mapDispatchToProps = (dispatch) => ({
  createQuestionTopic: (questionTopic) => dispatch(createQuestionTopic(questionTopic)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicSelection);
