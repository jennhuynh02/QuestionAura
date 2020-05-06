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
        <div className="dropdown">
          <img className="profile-dropdown" src={window.profilePic} />
          <ul className="dropdown-content">

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
