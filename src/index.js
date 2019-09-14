import React from 'react';
import ReactDom from 'react-dom';
import Hello from './components/Hello';
// import name, { even } from './const';

// console.log('Hello Bakate how are you doing papi');
// console.log(` My name is ${name}`);
// console.log(` Here we go: ${even}`);
ReactDom.render(<Hello />, document.getElementById('hi'));
