import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import Add from './Task/Add';
import Multiply from './Task/Multiply';
import Div from './Task/Div';
import Substraction from './Task/Substraction';
import MiniCal from './Task/MiniCal';
import Details from './Task/Details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{display:"flex",padding:"10px",margin:"20px",justifyContent:"space-between"}}>
  <Add></Add>
  <Multiply></Multiply>
  <Div></Div>
  <Substraction></Substraction>
  </div>
  <MiniCal></MiniCal>
  <br/>
  <Details></Details>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
