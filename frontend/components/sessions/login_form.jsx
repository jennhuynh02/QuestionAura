import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
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
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="error-messages" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form" id="login-form">
        <form onSubmit={this.handleSubmit}>
          <h2 id="form-title-name">Login</h2>
          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.update('email')}
            className="form-input-boxes"
            />

          <br />

          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update('password')}
            className="form-input-boxes"
            />

          <button className="form-login-buttons">Login</button>
        </form>
        {/* <p>Forgot Password?</p> */}
        {this.renderErrors()}
      </div>
    );
  }
}

export default LoginForm;
