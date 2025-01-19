import React from 'react';
import Keyboard from "../Keyboard";

function GuessInput({addGuess, gameState, keyState}) {
    const [guess, setGuess] = React.useState('');

    function addKey(letter) {
        if (guess.length >= 5) {
            return;
        }
        setGuess(guess + letter);
    }

    return <>
    <form className="guess-input-wrapper" onSubmit={event => {
        event.preventDefault();
        console.log(guess);
        addGuess(guess);
        setGuess('')
    }}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" disabled={gameState !== 'playing'} type="text" required value={guess} onChange={event => setGuess(event.target.value.toUpperCase())} pattern="[A-Za-z]{5,5}"/>
    </form>
        <Keyboard addKey={addKey} keyState={keyState} />
        </>
}

export default GuessInput;
