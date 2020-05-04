import { connect } from 'react-redux';

import QuestionPage from './question_page';
import { fetchQuestion } from "../../actions/question_actions";

const mapStateToProps = (state, { match }) => ({
  questionId: parseInt(match.params.questionId),
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);