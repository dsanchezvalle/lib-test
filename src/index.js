import React from 'react';
import ReactDOM from 'react-dom/client';
import * as styles from './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


export {styles};
export * from './stories/Button/Button'
export * from './stories/Header/Header'
export * from './stories/Page/Page'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
