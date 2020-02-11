import React from 'react';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-solid-svg-icons';
import './SecondsCounter.css';

function SecondsCounter(props) {
  return (
    <div className="container">
      <div className='row counter d-flex justify-content-center align-items-center m-auto p-2'>
        <div className='col icon text-center m-1 box'><FontAwesomeIcon icon={faClock} /></div> 
        <div className='col counterSix text-center m-1 box'>{props.numSix}</div>
        <div className='col counterFive text-center m-1 box'>{props.numFive}</div>
        <div className='col counterFour text-center m-1 box'>{props.numFour}</div>
        <div className='col counterThree text-center m-1 box'>{props.numThree}</div>
        <div className='col counterTwo text-center m-1 box'>{props.numTwo}</div>
        <div className='col counterOne text-center m-1 box'>{props.numOne}</div>     
      </div> 
      <div className='row'>
        <div className='butonStart'></div>
        <div className='butonStop'></div>
      </div>
        
    </div>
  );
}

SecondsCounter.propTypes = {
  numSix: propTypes.number,
  numFive: propTypes.number,
  numFour: propTypes.number,
  numThree: propTypes.number,
  numTwo: propTypes.number,
  numOne: propTypes.number,
};



export default SecondsCounter;
