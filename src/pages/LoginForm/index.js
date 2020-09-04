import React from 'react';
import Logo from '../LoginForm/components/logo';
import LoginForm from '../LoginForm/components/form';
import ToSignUp from '../LoginForm/components/signUp';
import './Style/style.scss';

class SignIn extends React.Component {
  render() {
    return (
      <div>
        <Logo />
        <ToSignUp />
        <LoginForm />
      </div>
    );
  }
}

export default SignIn;
