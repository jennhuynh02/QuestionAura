import { connect } from 'react-redux';

import QuestionPage from './question_page';
import { fetchQuestion } from "../../actions/question_actions";
import { fetchAnswers } from '../../actions/answer_actions';

const mapStateToProps = (state, { match }) => ({
  questionId: parseInt(match.params.questionId),
  questions: Object.values(state.entities.questions),
  answers: Object.values(state.entities.answers),
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
  fetchAnswers: () => dispatch(fetchAnswers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);