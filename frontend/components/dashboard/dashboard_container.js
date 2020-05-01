import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
