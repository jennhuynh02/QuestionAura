import React from 'react';
import SessionButtonsContainer from "./sessions_buttons_container";
import LoginContainer from "./login_container";

const WelcomePage = () => (
  <div className="welcome-page">
    <img src={window.fullLogoURL} />
    <div className="welcome-content">

    <header className="welcome-logo">Question Aura</header>
    <h2 className="welcome-quote">"I know that I know nothing." ~ Socratic Paradox</h2>
    <div className="forms">
    <SessionButtonsContainer />
    <LoginContainer />
    </div>
    </div>
  </div>
)

export default WelcomePage;
