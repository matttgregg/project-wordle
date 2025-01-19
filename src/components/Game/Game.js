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
}

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState('playing');
  const [answer, setAnswer] = React.useState(() => {
   const word = sample(WORDS);
   console.log(word);
   return word;
  });
  const [keyState, setKeyState] = React.useState({});

  function newGame() {
    setGuesses([]);
    setGameState('playing');
    const nextAnswer = sample(WORDS);
    setAnswer(nextAnswer);
    setKeyState({});
    console.log(nextAnswer);
  }

  function addGuess(text) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    const newGuess = { text, id: crypto.randomUUID()}
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    // Update the key state with any new information
    const checked =  checkGuess(text, answer);
    const nextKeyState = {...keyState};
    console.log(Object.entries(checked));
    for (const {letter, status} of Object.values(checked)) {
      if (status === 'correct' || status === 'incorrect') {
        nextKeyState[letter] = status; // Always update correct and incorrect.
        console.log(`${letter} is correct`);
      } else if (status === 'misplaced' && nextKeyState[letter] !== 'correct') {
        nextKeyState[letter] = status; // Never update from correct -> misplaced.
      }
    }
    setKeyState(nextKeyState);

    if (checked.every(({status}) => status === 'correct')) {
      setGameState('won')
    } else if (guesses.length + 1 >= NUM_OF_GUESSES_ALLOWED) {
      setGameState('lost')
    }
  }
  return <>
    <GameBanner gameState={gameState} answer={answer} guessCount={guesses.length} newGame={newGame} />
    <PreviousGuesses guesses={guesses} answer={answer} />
    <GuessInput addGuess={addGuess} gameState={gameState} keyState={keyState} />
  </>;
}

export default Game;
