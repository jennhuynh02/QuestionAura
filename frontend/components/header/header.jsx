import React from 'react';
import SearchBarContainer from '../searchbar/searchbar_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grey: false,
    };
    this.searchGrey = this.searchGrey.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
  }

  handleLogoClick(e) {
    e.preventDefault();
    location.href = '/#/';
  }

  searchGrey() {
    this.setState({ grey: true });
  }

  offGrey() {
    this.setState({ grey: false });
  }

  render() {
    const {
      logout, openModal, first, second,
    } = this.props;
    return (
      <div id="header">
        <div id="inner-header">
        <h1 id="logo" onClick={this.handleLogoClick} alt="Logo">Question Aura</h1>
        <h1 id="feedlogo" onClick={this.handleLogoClick} alt="Feed Logo">
          <img className="home-category-icon" src={window.Home} />
          <p className="home-name">Home</p>
        </h1>

        <span onClick={() => this.searchGrey()}>
          <SearchBarContainer />
        </span>

        <div className="dropdown">
          <img className="profile-dropdown" src={window.profilePic} />
          <ul className="dropdown-content">
            <img className="user-dropdown-pic" src={window.profilePic} />
            <p className="user-dropdown-name">
              {first}
              {' '}
              {second}
            </p>
            <li className="dropdown-options" onClick={() => logout()}>
              Logout
            </li>

          </ul>
        </div>
        <button type="submit" className="header-question-click" onClick={() => openModal({ question: -1 })}>Ask Question</button>
        {this.state.grey ? <div className="back" onClick={() => this.offGrey()} /> : <div style={{ position: 'fixed' }} />}
        </div>
      </div>
    );
  }
}

export default Header;
