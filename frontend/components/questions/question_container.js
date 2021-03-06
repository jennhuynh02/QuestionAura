import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { createQuestion, fetchQuestion } from '../../actions/question_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
  errors: state.questions.errors,
  currentUser: state.session.id,
  topics: Object.values(state.entities.topics),
  questions: Object.values(state.entities.questions),
  first: state.entities.users[state.session.id].first_name,
  last: state.entities.users[state.session.id].last_name,
  formType: 'Add Question',
  question: {
    ask: '', asker_id: '', id: '',
  },
});

const mapDispatchToProps = (dispatch) => ({
  action: (question) => dispatch(createQuestion(question)),
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
