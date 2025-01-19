import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import PreviousGuesses from "../PreviousGuesses";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import {checkGuess} from '../../game-helpers'
import GameBanner from "../GameBanner";

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function isCorrect(guess, answer) {
  return checkGuess(guess, answer).every(({status}) => status === 'correct')
}

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState('playing')

  function addGuess(text) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    const newGuess = { text, id: crypto.randomUUID()}
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    if (isCorrect(text, answer)) {
      setGameState('won')
    } else if (guesses.length + 1 >= NUM_OF_GUESSES_ALLOWED) {
      setGameState('lost')
    }
  }
  return <>
    <GameBanner gameState={gameState} answer={answer} guessCount={guesses.length} />
    <PreviousGuesses guesses={guesses} answer={answer} />
    <GuessInput addGuess={addGuess} gameState={gameState} />
  </>;
}

export default Game;
