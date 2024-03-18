import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <p className='titulo'> Isaac Sebastián Esquivel Cruz TIS 5A</p> 
    <p className='titulo'> Memorama </p>
    <App />
  </React.StrictMode>
);

reportWebVitals();
