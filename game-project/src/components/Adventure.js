import React, { useState, useEffect } from 'react';
import { gameOptions } from './Options';

const Adventure = () => {
  const [options, setOptions] = useState(gameOptions);

  function displayNewOption() {
    const text = document.createElement('div');
    text.innerText = options[2].text;
    document.body.appendChild(text);
    const button = document.createElement('button');
    button.innerText = options[2].btn;
    document.body.appendChild(button);
    const buttonTwo = document.createElement('button');
    buttonTwo.innerText = options[2].btnTwo;
    document.body.appendChild(buttonTwo);
  }

  return (
    <div className="container bg-dark p-5 text-center">
      <h1 id="b3">{options[0].text}</h1>
      <button id="b1" onClick={displayNewOption}>
        {options[0].btn}
      </button>
      <button id="b2" onClick={displayNewOption}>
        {options[0].btnTwo}
      </button>
    </div>
  );
};

export default Adventure;
