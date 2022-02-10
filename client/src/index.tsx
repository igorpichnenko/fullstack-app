import React from 'react';
import ReactDOM from 'react-dom';
import { createIOC } from './bindings';
import { Cards } from './components/Cards';
import { iocContext } from './hooks/useInject';

const ioc = createIOC();

ReactDOM.render(
  <iocContext.Provider value={ioc}>
    <Cards />
  </iocContext.Provider>,
  document.getElementById('root'),
);
