import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components';

window.addEventListener('load', () => {

  const container = document.getElementById('app');
  ReactDOM.render(
    <Root />,
    container,
  )
});
