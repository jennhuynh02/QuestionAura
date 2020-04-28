import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
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
      <div className = "login-form">
        <form onSubmit={this.handleSubmit}>
          Login
          <br/>
          <input type="text"
          placeholder="Email"
          value={this.state.username}
          onChange={this.update("username")}/>

          <br/>

          <input type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.update("password")}/>

          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;