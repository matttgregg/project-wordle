import React from 'react';

function Keyboard({addKey, keyState}) {
  const rows = [
      ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      ['Z', 'X', 'C', 'V', 'B', 'M', 'N']

  ]
  console.log(Object.entries(keyState));
  return <div>
    {rows.map((row, i) =>
    <div className="keyboard-row" key={i}>
      {row.map((letter, i) => {
        let className = 'guess-key';
        if (keyState[letter]) {
          className = `${className} letter-${keyState[letter]}`
        }
        return <button className={className} key={i} onClick={() => addKey(letter)}>{letter}</button>})}
    </div>)}
  </div>;
}

export default Keyboard;
