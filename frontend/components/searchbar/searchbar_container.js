
import { connect } from 'react-redux';
import SearchBar from './searchbar';
import { fetchQuestions } from "../../actions/question_actions";

const mapStateToProps = (state) => ({
  questions: Object.values(state.entities.questions),
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);