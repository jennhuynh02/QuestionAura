
import { connect } from 'react-redux';
import Topics from './topics';
import { fetchTopics } from "../../actions/topic_actions";
import { fetchQuestions } from "../../actions/question_actions";

const mapStateToProps = (state) => ({
  topics: Object.values(state.entities.topics),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTopics: () => dispatch(fetchTopics()),
  fetchQuestions: () => dispatch(fetchQuestions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
