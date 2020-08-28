import React from 'react';
// import PasswordView from './FormStyle/showPassword/showPassword';
// import LoginBtn from './FormStyle/loginBtn/LoginBtn';
// import CheckBox from './FormStyle/checkBox/CheckBox';
// import {
//   SignUp,
//   LinkBtn,
//   Form,
//   Label,
//   EmailInput,
//   PwdInput,
//   RememberMe,
// } from './FormStyle/login';

import './Style/style.scss';

const initialState = {
  emailAddr: '',
  password: '',
  emailErrMsg: '',
  passwordErrMsg: '',
};

class SignIn extends React.Component {
  state = initialState;
  handleChange = (event) => {
    const isCheckbox = event.target.type === 'checkbox';
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let emailErrMsg = ' ';
    let passwordErrMsg = ' ';
    if (!this.state.password) {
      passwordErrMsg = 'Password cannot be blank';
    }

    if (!this.state.email.includes('.com')) {
      emailErrMsg = 'Invalid email address';
    }
    if (emailErrMsg || passwordErrMsg) {
      this.setState({ emailErrMsg, passwordErrMsg });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };

  render() {
    return (
      <div>
        <p className="signUpPara">
          Don't have an account? &nbsp;
          <a className="linkBtn" href="#">
            Sign up
          </a>
        </p>
        <form className="loginForm" onSubmit={this.handleSubmit}>
          <label className="laBel">Email address</label>
          <input
            className="emailInput"
            placeholder="Enter your email address..."
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div className="errMsg">{this.state.emailErrMsg}</div>
          <br />

          <label className="laBel">Password</label>
          <br />
          <span className="pwdReveal">Show password</span>
          <input
            className="pwdInput"
            type="password"
            name="password"
            placeholder="Enter your password..."
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <div className="errMsg">{this.state.passwordErrMsg}</div>
          <br />
          <a className="linkBtn" href="#">
            Forgot my password
          </a>
          <input className="checkBox" type="checkbox" />
          <span className="rememberMe">Remember Me</span>
          <br />
          <button className="loginBtn" type="submit">
            Log in
          </button>
        </form>
      </div>
    );
  }
}

// const Formm = () => {
//   return <div></div>;
// };

export default SignIn;
