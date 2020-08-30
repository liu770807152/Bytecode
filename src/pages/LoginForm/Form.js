import React from 'react';
import { BrowserRouter as Route, Link, Switch } from 'react-router-dom';
import Register from '../RegForm/components/reg';

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

  passwordRevealer = (value) => {
    const [shown, hide] = React.useState(false);
  };
  render() {
    return (
      <div>
        <p className="signUpPara">
          Don't have an account? &nbsp;
          <Link className="linkBtn" to="/register">
            Sign up
          </Link>
          <Switch>
            <Route exact path="/" component={SignIn}></Route>
            <Route path="/register" component={Register}></Route>
          </Switch>
        </p>
        <form className="loginForm" onSubmit={this.handleSubmit}>
          <label htmlFor="email" className="laBel">
            Email address
          </label>
          <input
            className="emailInput"
            id="email"
            placeholder="Enter your email address..."
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div className="errMsg">{this.state.emailErrMsg}</div>
          <br />

          <label htmlFor="password" className="laBel">
            Password
          </label>
          <br />
          <span className="pwdReveal">Show/Hide password</span>
          <input
            className="pwdInput"
            id="password"
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
          <input id="rememberMe" className="checkBox" type="checkbox" />
          <label htmlFor="rememberMe" className="rmbMe">
            Remember Me
          </label>
          <br />
          <button className="loginBtn" type="submit">
            Log in
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
