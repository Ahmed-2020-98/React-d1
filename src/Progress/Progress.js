import React from 'react';

import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBar1(props) {
  
  return <ProgressBar now={props.now} label={`${props.now}%`} style={{marginBottom:"20px"}}/>;
}

export default ProgressBar1;