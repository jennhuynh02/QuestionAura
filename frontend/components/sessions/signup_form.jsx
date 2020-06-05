import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
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

  cancelClick(e) {
    e.preventDefault();
    location.href="/#/login";
  }

  // renderErrors() {
  //   return (
  //     <ul >
  //       {this.props.errors.map((error, i) => (
  //         <li className="error-messages" key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    return (
      <div className="session-form" id="signup-form">
        <form onSubmit={this.handleSubmit}>
          <h2 id="form-title-name">Signup</h2>
          <br />
          <div className="fit-names">

            <div className="name-fit">
              <label className="signup-input-labels">FIRST NAME</label>
              <input
                type="text"
                placeholder="First Name"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                className="session-form-input-boxes"
                id="adjust-signup-boxes"
              />
            </div>

            <div className="name-fit">
              <label className="signup-input-labels">LAST NAME</label>
              <input
                type="text"
                placeholder="Last Name"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                className="session-form-input-boxes"
              />
            </div>

          </div>
          <br />
          EMAIL
          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.update('email')}
            className="form-input-boxes"
          />

          <br />
          PASSWORD
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update('password')}
            className="form-input-boxes"
          />
          <p className="signup-agreement">By clicking "Sign Up" you indicate that you have read and agree to Question Aura's Terms of Human Discourse and Group Education.</p>

          <div className="signup-form-buttons">
            <button type="submit" className="form-login-buttons">Sign Up</button>
            <button onClick={(e) =>this.cancelClick(e)} className="form-login-buttons">Cancel</button>
          </div>

        </form>
      </div>
    );
  }
}

export default SignupForm;
