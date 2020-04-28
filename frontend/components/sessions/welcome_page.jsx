import React from 'react';
import LoginContainer from "./login_container";

const WelcomePage = () => (
  <div>
    <header className="welcome-logo">Question Aura</header>
    <h2>"I know that I know nothing." ~ Socratic Paradox - Socrates</h2>
    <LoginContainer />
  </div>
)

export default WelcomePage;