import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';


// REDUX
import { Provider } from 'react-redux';
import Store from './JS/store/store';

// import css bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






























// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { Provider } from 'react-redux';
// import Store from './JS/store/store';


// ReactDOM.render(
//   <Provider store={Store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
//aya







































// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';
// // import package

// import { Provider } from 'react-redux'
// import store from './Redux/store/store'
// //css
// import './index.css';


// ReactDOM.render(
  
//   <Provider store = {store}>
//   <App />
//   </Provider>,

//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



// import React from 'react'
// import ReactDOM from 'react-dom'

// import './index.css'

// import App from './App'
// import store from './Redux/store/store'

// import { Provider } from 'react-redux'

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )