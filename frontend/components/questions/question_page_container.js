import { connect } from 'react-redux';

import QuestionPage from './question_page';
import { fetchQuestion, deleteQuestion } from "../../actions/question_actions";
import { fetchAnswers, deleteAnswer } from '../../actions/answer_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, { match }) => ({
  questionId: parseInt(match.params.questionId),
  questions: Object.values(state.entities.questions),
  answers: Object.values(state.entities.answers),
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
  deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
  fetchAnswers: () => dispatch(fetchAnswers()),
  deleteAnswer: (answerId) => dispatch(deleteAnswer(answerId)),
  openModal: () => dispatch(openModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);