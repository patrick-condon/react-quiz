import React from 'react';

const AnswerTile = props => {
  return(
    <li onClick={props.checkCorrect} className={props.className}>{props.body}</li>
  )
}

export default AnswerTile;
