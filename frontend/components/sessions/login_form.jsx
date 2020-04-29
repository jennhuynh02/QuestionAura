import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLoginSubmit = this.handleDemoLoginSubmit.bind(this);
  }

  handleDemoLoginSubmit(e) {
    e.preventDefault();
    const user = { email: 'guestuser@questionaura.com', password: '123456' };
    this.props.processForm(user);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = { ...this.state };
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form">
        <form onSubmit={this.handleSubmit}>
          <h2>Login</h2>
       
          <input type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={this.update("email")}
          className="form-input-boxes"/>

          <br/>

          <input type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.update("password")}
          className="form-input-boxes"/>

          <button className="form-login-buttons">Login</button>
        </form>
        <button className="demo-login-button" onClick={this.handleDemoLoginSubmit}>Demo Login Button</button>
      </div>
    );
  }
}

export default LoginForm;