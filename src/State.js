import React, { useState } from 'react';

export const State = () => {
  return (
    <>
      <State1 />

      <br />

      <State2 />
    </>
  );
};

// TODO: What happens when the button is clicked?
const State1 = () => {
  const [foos, setFoos] = useState([]);

  const addFoo = () => {
    const nextFoos = [...foos, 'foo'];
    setFoos(nextFoos);
  };

  return (
    <div>
      State1: {foos.join(', ')}

      <br />

      <button className="btn btn-primary" onClick={addFoo}>Add foo</button>
    </div>
  );
};

// TODO: What do you think will happen when the increment button is clicked?
// Why do you think this happens?
// Fix this component.
const State2 = () => {
  let count = 0;

  const increment = () => {
    count++;
  };

  return (
    <div>
      State2: {count}

      <br />

      <button className="btn btn-primary" onClick={increment}>increment</button>
    </div>
  );
};
