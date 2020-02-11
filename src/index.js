import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SecondsCounter from './SecondsCounter';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';


let counter = 0;
setInterval(()=>{
  const six = Math.floor(counter/100000);
  const five = Math.floor(counter/10000);
  const four = Math.floor(counter/1000);
  const three = Math.floor(counter/100);
  const two = Math.floor(counter/10);
  const one = Math.floor(counter/1);
  counter++;
  ReactDOM.render(<SecondsCounter numSix={six} numFive={five} numFour={four} numThree={three} numTwo={two} numOne={one}/>, document.getElementById('root'));
},1000);


serviceWorker.unregister();
