import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Root from './components'
import reducer from './reducers'

window.addEventListener('load', () => {

  const store = createStore(reducer)
  const container = document.getElementById('app');

  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>,
    container,
  )
});
