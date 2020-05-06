import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogoClick = this.handleLogoClick.bind(this);
  }

  handleLogoClick(e) {
    e.preventDefault();
    location.href = '/#/';
  }

  render() {
    const { logout, openModal } = this.props;
  return (
    <div id="header">
    <h1 id="logo" onClick={this.handleLogoClick}>Question Aura</h1>
    <ul className="dropdown">
        <img className="profile-dropdown" src={window.profilePic} />
        <li className="dropdown-content">

        <p onClick={() => logout()}>Logout</p>
        </li>
    </ul>
    <button type="submit" className="header-question-click" onClick={() => openModal({'question': -1})}>Ask Question</button>
  </div>)

}};

export default Header;
