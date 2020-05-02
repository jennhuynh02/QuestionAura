import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup, receiveErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';
import React from 'react';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  navLink: <Link to="/login">Cancel</Link>,
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(receiveErrors([])),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
