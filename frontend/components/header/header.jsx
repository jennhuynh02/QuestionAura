import React from 'react';

const Header = (props) => (
  <div id="header">
    <h1 id="logo">Question Aura</h1>
    <p className="dropdown">Drop</p>
    <button onClick={() => props.logout()}>Logout</button>
    <button type="submit" className="header-question-click" onClick={() => props.openModal({'question': -1})}>Ask Question</button>
  </div>

);

export default Header;
