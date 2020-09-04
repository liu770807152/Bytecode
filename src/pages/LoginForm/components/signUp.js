import React from 'react';
import { BrowserRouter as Route, Link, Switch } from 'react-router-dom';
import Register from '../../RegForm/reg';
import SignIn from '../index';

const ToSignUpPage = () => {
  return (
    <div>
      <p className="signUpPara">
        Don't have an account? &nbsp;
        <Link className="linkBtn" to="/reg">
          Sign up
        </Link>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/reg" component={Register} />
        </Switch>
      </p>
    </div>
  );
};
export default ToSignUpPage;
