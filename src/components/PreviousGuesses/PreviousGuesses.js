import React from 'react';

import Guess from "../Guess";
import {range} from '../../utils.js';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants.js'

function PreviousGuesses({guesses, answer}) {
  return <div className="guess-results">
    {range(0, NUM_OF_GUESSES_ALLOWED).map(index => <Guess key={index} answer={answer} guess={index < guesses.length ? guesses[index].text : ''} />)}
  </div>
}

export default PreviousGuesses;
