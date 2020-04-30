import React from 'react';
import SignupContainer from './signup_container';
import LoginContainer from './login_container';

const SignUpPage = () => (
  <div className="welcome-page">
    <div className="welcome-content">

      <header className="welcome-logo">Question Aura</header>
      <h2 className="welcome-quote">"I know that I know nothing." ~ Socratic Paradox</h2>
      <div className="forms">
        <SignupContainer />
        <LoginContainer />
      </div>
    </div>
  </div>
)

export default SignUpPage;
