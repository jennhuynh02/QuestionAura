import React from 'react';
import { Redirect, Link } from 'react-router-dom';

export const Header = (props) => {
  return (
    <div className="header">
      <h1 className="logo">Question Aura</h1>
    <button onClick={() => props.logout() }>Logout</button>
    </div>
  )
}