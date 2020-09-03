import React from 'react';
import './App.scss';
import Navbar from '../Navbar/Navbar';
import Companybasic from '../Companybasic/Companybasic';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Companybasic />
    </div>
  )
};

export default App;
