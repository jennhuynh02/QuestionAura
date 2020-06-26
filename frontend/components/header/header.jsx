import React from 'react';
import SearchBarContainer from '../searchbar/searchbar_container';

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
    const { logout, openModal, first, second } = this.props;
    return (
      <div id="header">
        <h1 id="logo" onClick={this.handleLogoClick} alt="Logo">Question Aura</h1>
        <h1 id="feedlogo" onClick={this.handleLogoClick} alt="Feed Logo">
          <img className="home-category-icon" src={window.Home} />
          <p className="home-name">Home</p>
        </h1>

        <SearchBarContainer />

        <div className="dropdown">
          <img className="profile-dropdown" src={window.profilePic} />
          <ul className="dropdown-content">
            <img className="user-dropdown-pic" src={window.profilePic} />
            <p className="user-dropdown-name">{first} {second}</p>
            <li className="dropdown-options" onClick={() => logout()}>
              Logout
            </li>

          </ul>
        </div>
        <button type="submit" className="header-question-click" onClick={() => openModal({ question: -1 })}>Ask Question</button>
      </div>
    );
  }
}

export default Header;
