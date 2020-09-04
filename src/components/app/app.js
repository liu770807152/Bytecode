import React from './node_modules/react';
import './app.scss';
import navBar from '../navBar/navBar';
import companyBasic from '../companyBasic/companyBasic';

function app() {
  return (
    <div>
      <header>
        <navBar />
      </header>
      <companyBasic />
    </div>
  )
};

export default app;
