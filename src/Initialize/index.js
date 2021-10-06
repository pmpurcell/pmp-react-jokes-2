import React, { useState } from 'react';
import getJoke from '../getJoke';

function Initialize() {
  const [btnText, setBtnText] = useState('Get a Joke');
  const [joke, setJoke] = useState({});
  console.warn(joke);
  console.warn(setBtnText);

  const setButton = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });
      setButton('Get Punchline');
    });
  };

  return (
    <div className="App">
      <h2>{joke.setup}</h2>
      <h5>{btnText !== 'Get Punchline' ? joke.punchline : ''}</h5>
      <div>
        {btnText === 'Get a Joke' || btnText === 'Get Another Joke' ? (
          <button
            onClick={getAJoke}
            type="button"
            className="btn btn-primary mt-3"
          >
            {btnText}
          </button>
        ) : (
          <button
            type="button"
            id="joke-button"
            className="btn btn-primary mt-3"
            onClick={() => setButton('Get Another Joke')}
          >
            {btnText}
          </button>
        )}
      </div>
    </div>
  );
}

export default Initialize;
