import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import TodoContainer from './components/TodoContainer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
