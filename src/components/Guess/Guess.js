import React from 'react';
import {range} from '../../utils'
import {checkGuess} from '../../game-helpers'

function Guess({guess, answer}) {
  let letters = range(0, 5).map(() => {return {letter: '', className: 'cell'}})

  if (guess.length === 5) {
    letters = checkGuess(guess, answer).map(({letter, status}) => {return {letter, className: `cell ${status}`}})
  }

  return <p className="guess">
    {letters.map(({letter, className}, index) => <span key={index} className={className}> {letter != '' ? letter : <>&nbsp;</>} </span>)}
  </p>;
}

export default Guess;
