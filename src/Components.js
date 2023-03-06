import React from 'react';

export const Components = () => {
  return (
    <div>
      <Components1 x={4} />
      <Components1 />

      <br />

      <Components2 />

      <br />

      <Components3 />
    </div>
  );
};

// What does this component do?
const Components1 = (props) => {
  const x = props.x ?? 0;
  return <div>Components1: {x * 2}</div>;
};

// What does this component show?
const Components2 = () => {
  return (
    <div>
      Components2: <Upcase msg={'hello world'} />
    </div>
  );
};
const Upcase = (props) => {
  const msg = props.msg ?? '';
  return <span>{msg.toUpperCase()}</span>;
};

// TODO: Make some more basic components, and render them next to "Components3".
const Components3 = () => {
  return <div>Components3:</div>;
};
