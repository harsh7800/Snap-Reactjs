import React from 'react';
import "./DisplayComponent.scss";

function DisplayComponent(props) {
  const h = () => {
     if(props.time.h === 0){
       return '';
     }else {
       return <span>{(props.time.h >= 10)? props.time.h : "0"+ props.time.h}</span>;
     }
  }
  return (
    <div className='displayComponent-wrapper'>
       {h()}&nbsp;&nbsp;
       <span id='mins'>{(props.time.m >= 10)? props.time.m : "0"+ props.time.m}</span>&nbsp;:&nbsp;
       <span id='miliSec'>{(props.time.s >= 10)? props.time.s : "0"+ props.time.s}</span>&nbsp;:&nbsp;
       <span id='nanoSec'>{(props.time.ms >= 10)? props.time.ms : "0"+ props.time.ms}</span>
    </div>
  );
}

export default DisplayComponent;