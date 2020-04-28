import React from 'react';
// import { Link } from 'react-router-dom';

export const Header = (props) => {
  return (
    <div className="header">
      <h1 className="logo">Question Aura</h1>
      <button onClick={() => props.logout() }> Log Out </button>
    </div>
  )
}