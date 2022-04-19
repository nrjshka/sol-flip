import 'antd/dist/antd.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './pages';
import reportWebVitals from './reportWebVitals';
import {
  loadApp,
  store,
} from './store';
import { SolanaConnector } from './ui';

store.dispatch(loadApp())

ReactDOM.render(
  <React.StrictMode>
    <SolanaConnector>
      <App />
    </SolanaConnector>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
