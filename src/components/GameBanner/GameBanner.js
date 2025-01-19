import React from 'react';
import {RefreshCcw} from 'react-feather'

function GameBanner({gameState, guessCount, answer, newGame}) {
  return <>
    {gameState === 'won' && <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>&nbsp;{guessCount} guesses</strong>.
      </p>
      <RefreshCcw onClick={newGame} />
    </div>}
    {gameState === 'lost' &&
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
          <RefreshCcw onClick={newGame} />
        </div>
    }
  </>;
}

export default GameBanner;
