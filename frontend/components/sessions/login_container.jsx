import { connect } from 'react-redux';
// import { Link } from './login_form';
import { login, receiveErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  // navLink: <Link to="/forgotpasswordpage"
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(receiveErrors([])),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
