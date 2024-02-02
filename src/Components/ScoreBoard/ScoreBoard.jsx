import React from 'react';
import "./ScoreBoard.css";

 const ScoreBoard = ({scores,xPlaying}) => {
    const {xScore,oScore} =scores;
  return (
    <div className ="scoreBoard">
        <span className={`score x-score ${!xPlaying && "inactive"}`}>Red(X) = {xScore}</span>
        <span className={`score o-score ${xPlaying && "inactive"}`}>Blue(O) = {oScore}</span>
    </div>
  )
}
export default ScoreBoard;