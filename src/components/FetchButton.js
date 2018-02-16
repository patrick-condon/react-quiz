import React from 'react';

const FetchButton = props => {
  return(
    <button onClick={props.buttonClick}>Fetch Question</button>
  )
}

export default FetchButton;
