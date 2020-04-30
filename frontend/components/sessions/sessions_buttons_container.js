import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionButtonsPocket from './session_buttons';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    navLink: <Link to="/signup">Signup With Email</Link>,
  };
};

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionButtonsPocket);
