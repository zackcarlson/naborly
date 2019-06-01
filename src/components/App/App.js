import React from 'react';
import './App.css';
import store from '../../store/index.js';
import { Provider } from 'react-redux';
import Routes from '../Routes/Routes.js';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes/>
    </Router>
  </Provider>
);

export default App;