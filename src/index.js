import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import StateProvider from './hooks/state';

import { countInitialState, countReducer } from "./hooks/countActions";
import { userInitialState, userReducer } from "./hooks/userActions";

const initialState = {
  ...countInitialState,
  ...userInitialState
};

const reducer = ({user, count}, action) => ({
  userState: userReducer(user, action),
  countState: countReducer(count, action)
});


const Root = () => (
<StateProvider initialState={initialState} reducer={reducer}>
  <App />
</StateProvider>
);

ReactDOM.render(
<Root/>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
