import React from 'react';
import { render } from 'react-dom';
import './i18n';
import CountState from './components/Count';
import CountReducer from './components/CounterReducer';
import Bonjour from './components/Bonjour';

const App = () => (
  <>
    <CountState />
    <CountReducer />
    <Bonjour />
  </>
);
render(<App />, document.getElementById('hi'));
