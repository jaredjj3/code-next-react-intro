import React from 'react';

export const Components = () => {
  return (
    <>
      <Components1 x={4} />
      <Components1 />

      <br />

      <Components2 />

      <br />

      <Components3 />
    </>
  );
};

// TODO: What does this component do?
const Components1 = (props) => {
  const x = props.x ?? 0;
  return <div>Components1: {x * 2}</div>;
};

// TODO: What does this component show?
const Components2 = () => {
  return (
    <div>
      Components2: <WelcomeLoudly name={'Jared'} />
    </div>
  );
};
const WelcomeLoudly = (props) => {
  const name = props.name ?? '';
  return <span>WELCOME {name.toUpperCase()}</span>;
};

// TODO: Make some more basic components, and render them after "Components3".
const Components3 = () => {
  return <div>Components3:</div>;
};
