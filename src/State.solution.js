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

// What happens when the button is clicked?
// It appends 'foo' to the foos variable, then displays it.
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
      <button className="btn btn-primary" onClick={addFoo}>
        Add foo
      </button>
    </div>
  );
};

// What do you think will happen when the increment button is clicked?
// Nothing that we can see. The count variable does change, but the display remains the same.
//
// Why do you think this happens?
// React has no idea the count variable changed so it has no reason to rerender.
//
// TODO: Fix this component.
const State2 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      State2: {count}
      <br />
      <button className="btn btn-primary" onClick={increment}>
        increment
      </button>
    </div>
  );
};
