import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { createQuestion } from '../../actions/question_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
  errors: state.questions.errors,
  currentUser: state.session.id,
  topics: Object.values(state.entities.topics),
  first: state.entities.users[state.session.id].first_name,
  last: state.entities.users[state.session.id].last_name,
  formType: 'Add Question',
  question: {
    ask: '', asker_id: '', id: '', topic_id: '',
  },
});

const mapDispatchToProps = (dispatch) => ({
  action: (question) => dispatch(createQuestion(question)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
