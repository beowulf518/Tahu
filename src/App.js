import logo from './logo.svg';
import './App.css';

import React, { useEffect } from 'react';

import { API } from 'aws-amplify';

function App() {

  useEffect(() => {
    const fetchAPI = async ()=> {
      console.log("testing api: ");

      const apiName = 'tahuapi';
      const path = '/experiences/1c93f498-1fdc-4640-a691-6d6f9367d569';
      const myInit = {
        headers: {},
      };
      const res = await API.get(apiName, path, myInit);
      console.log(res);
      return res;
    }

    fetchAPI();

  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
