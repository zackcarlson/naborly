import React from 'react';
import './App.css';
import store from '../../store/index.js';
import { Provider } from 'react-redux';
import Routes from '../Routes/Routes.js';
import { HashRouter } from 'react-router-dom';

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <Routes/>
    </HashRouter>
  </Provider>
);

export default App;