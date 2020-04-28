import React from 'react';
import SignupContainer from "./signup_container";
import LoginContainer from "./login_container";

const WelcomePage = () => (
  <div className="welcome-page">
    <div className="welcome-content">

    <header className="welcome-logo">Question Aura</header>
    <h2 className="welcome-quote">"I know that I know nothing." ~ Socratic Paradox - Socrates</h2>
    <SignupContainer />
    <LoginContainer />
    </div>
  </div>
)

export default WelcomePage;