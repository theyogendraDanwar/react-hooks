import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { useStateContext } from './hooks/state';

function App() {
  const [state, dispatch] = useStateContext();
  useEffect(() => {
    async function fetchData () {
      try {
        let temp = state.userState.loggedIn ?
        await fetch('https://jsonplaceholder.typicode.com/todos/1') : '';
        const json = await temp.json();
      if (json != null) {
        dispatch({
          type: 'LOAD_INTIAL',
          data: json
        })
      }
      } catch(e) {
      }
    };
    fetchData();
  }, [state.userState.loggedIn]);
  return (
    <div className="App">
      <button
        onClick={() => dispatch({
          type: "login",
        })}
      >
        Make me blue!
    </button>
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
        {state.userState.data ? state.userState.data.title : ''}
        </a>
      </header>
    </div>
  );
}

export default App;
