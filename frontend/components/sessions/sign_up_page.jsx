import React from 'react';
import SignupContainer from './signup_container';
import LoginContainer from './login_container';

const SignUpPage = () => (
  <div className="welcome-page">
    <img className="welcome-page" src={window.fullLogoURL} />
    <div className="welcome-content">

      <header className="welcome-logo">Question Aura</header>
      <h2 className="welcome-quote">"I know that I know nothing." ~ Socratic Paradox</h2>
      <div className="forms" id="signup-page-height">
        <SignupContainer />
        <LoginContainer />
      </div>
    </div>
  </div>
);

export default SignUpPage;
