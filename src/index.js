import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/rent-my-ride">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
