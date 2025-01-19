import React from 'react';

function GuessInput({addGuess, gameState}) {
    const [guess, setGuess] = React.useState('');

    return <form className="guess-input-wrapper" onSubmit={event => {
        event.preventDefault();
        console.log(guess);
        addGuess(guess);
        setGuess('')
    }}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" disabled={gameState !== 'playing'} type="text" required value={guess} onChange={event => setGuess(event.target.value.toUpperCase())} pattern="[A-Za-z]{5,5}"/>
    </form>
}

export default GuessInput;
