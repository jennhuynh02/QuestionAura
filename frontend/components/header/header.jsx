import React from 'react';
import { Redirect, Link } from 'react-router-dom';

const Header = (props) => (
  <div id="header">
    <h1 id="logo">Question Aura</h1>
    <button onClick={() => props.logout()}>Logout</button>
  </div>

);

export default Header;
