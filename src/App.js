import React from 'react';
import Logo from './img/byteCRM.png';
import Form from './Form/Form';
import './Form/Style/style.scss';

function App() {
  return (
    <div>
      <img className="byteCRMLogo" src={Logo} alt="" />
      <Form />
    </div>
  );
}

export default App;
