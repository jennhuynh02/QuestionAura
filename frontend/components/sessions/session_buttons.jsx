import React from 'react';

class SessionButtonsPocket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleSignUpButton = this.handleSignUpButton.bind(this);
    this.handleDemoLoginSubmit = this.handleDemoLoginSubmit.bind(this);
  }

  handleDemoLoginSubmit(e) {
    e.preventDefault();
    const user = { email: 'guestuser@questionaura.com', password: '123456' };
    this.props.processForm(user);
    location.href = '/#/';
  }

  handleSignUpButton(e) {
    e.preventDefault();
    location.href = '/#/signup';
  }

  render() {
    return (
      <div className="session-buttons-pocket">
        <button className="demo-login-button" onClick={this.handleDemoLoginSubmit}>Guest Demo Login</button>
        <br />
        <button className="signup-form-button" onClick={(this.handleSignUpButton)}>Signup Form Page</button>
        <br />
        <h5>
          {this.props.navLink}
          {' '}
          By signing up or logging in, you have read and agreed to asking questions without any hesitations and answering questions confidently with the wisdom of your own knowledges and life experiences.
        </h5>
      </div>
    );
  }
}


export default SessionButtonsPocket;
