import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import { DataProvider } from './context/DataContext';

ReactDOM.render(
  <DataProvider>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </DataProvider>,
  document.getElementById('root'),
);
