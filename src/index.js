import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


// Only one ReactDOM.render.  This is the magic that forces the App.js File.  You can see above where it is imported - import App from './App';
// You can control click on <App /> and it will take you to that file

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // 'root' is rendering to the root div which is the only DOM that is created by the npx create react app
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
