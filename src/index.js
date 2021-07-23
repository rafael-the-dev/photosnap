import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/reset.css';
import './assets/css/responsive.css';
import './assets/css/base.css';
/*import './assets/css/general.css';

import './assets/css/base.css'; */
import './index.scss';
import App from './pages/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);