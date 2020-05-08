import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createAnswer } from '../../actions/answer_actions';
import AnswerForm from './answer_form';

const mapStateToProps = (state, { questionId }) => ({
  errors: state.answers.errors,
  currentUser: state.session.id,
  first: state.entities.users[state.session.id].first_name,
  last: state.entities.users[state.session.id].last_name,
  formType: 'Submit',
  answer: { answer: '', responder_id: '', question_id: '', id: '', photoUrl: null },
  questionId,
});

const mapDispatchToProps = (dispatch) => ({
  action: (answer) => dispatch(createAnswer(answer)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm);
