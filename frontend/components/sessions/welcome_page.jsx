import React from 'react';
import SessionButtonsContainer from "./sessions_buttons_container";
import LoginContainer from "./login_container";

const WelcomePage = () => (
  <div className="welcome-page">
    <img className="welcome-page" src={window.fullLogoURL} />
    <div className="welcome-content">

    <header className="welcome-logo">Question Aura
      <br />
      <div className="info-links">
        <a href="https://www.linkedin.com/in/jenniferanhhuynh/">
          <i className="fa fa-linkedin-square" style={{color: "blue", fontSize: "60px"}}></i>
        </a>

        <a href="https://github.com/jennhuynh02">  
          <i className="fa fa-github" style={{color: "black", fontSize: "60px"}}></i>
        </a>
      </div>
    </header>
    <h2 className="welcome-quote">"I know that I know nothing." ~ Socratic Paradox</h2>
    <div className="forms">
    <SessionButtonsContainer />
    <LoginContainer />
    </div>
    </div>
  </div>
);

export default WelcomePage;
