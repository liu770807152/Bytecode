import React from 'react';
import Logo from './img/byteCRM.png';
import LoginForm from './pages/LoginForm/Form';
import './pages/LoginForm/Style/style.scss';

function App() {
  return (
    <div>
      <img className="byteCRMLogo" src={Logo} alt="" />
      <LoginForm />
    </div>
  );
}

export default App;
