import React from 'react';
import logo from './logo.svg';
import './App.css';

import './components/LoginButton.js'
import LoginButton from './components/LoginButton.js';
import LogoutButton from './components/LogoutButton.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LoginButton></LoginButton>
        <LogoutButton></LogoutButton>
      </header>
    </div>
  );
}

export default App;
