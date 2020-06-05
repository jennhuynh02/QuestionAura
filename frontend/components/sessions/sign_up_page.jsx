import React from 'react';
import SignupContainer from './signup_container';
import LoginContainer from './login_container';

const SignUpPage = () => (
  <div className="welcome-page">
    <img className="welcome-page" src={window.fullLogoURL} />
    <div className="welcome-content">

      <header className="welcome-logo">Question Aura</header>
      <h2 className="welcome-quote-signup">"I know that I know nothing." ~ Socratic Paradox</h2>
      <div className="forms" id="signup-page-height">
        <SignupContainer />
        <LoginContainer />
      </div>
            <div className="author-info-signup">
          <p className="author-name">
            <a href="https://www.linkedin.com/in/jenniferanhhuynh/" target="_blank">
              <i className="fa fa-linkedin-square" style={{ color: '#0077b5', fontSize: '60px', marginRight: '20px' }} />
            </a>
            Made by: Jennifer Huynh
            <a href="https://github.com/jennhuynh02" target="_blank">
              <i className="fa fa-github" style={{ color: 'black', fontSize: '60px', marginLeft: '20px' }} />
            </a>
          </p>
        </div>
        <div className="mainpage-footer">

        </div>
    </div>
  </div>
);

export default SignUpPage;
