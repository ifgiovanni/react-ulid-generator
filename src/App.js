import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import { ulid } from 'ulid'

function App() {

  let getUlid = () => {
    return ulid().toLowerCase();
  }

  const [id, setUlid] = useState(getUlid());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <p>
         { id }
         </p>
        <button onClick={() => setUlid(getUlid)}>
          NEW
        </button>
      </header>
    </div>
  );
}

export default App;
