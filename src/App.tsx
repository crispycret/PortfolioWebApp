import React from 'react';

import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import HomeSection from './components/HomeSection';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      {/* 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
      */}
        <Navbar />
      <HomeSection />


{/* 
      <DemoSection />
      <DemoSection />
      <DemoSection />
 */}
    </div>
  );
}

export default App;
