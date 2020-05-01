import React from 'react';

const Header = (props) => (
  <div id="header">
    <h1 id="logo">Question Aura</h1>
    <button onClick={() => props.logout()}>Logout</button>
    <button type="submit" className="header-question-click" onClick={() => props.openModal('question')}>Ask Question</button>
  </div>

);

export default Header;
