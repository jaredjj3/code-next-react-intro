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
// It optionally takes a prop x (defaulting to 0), doubles it, and renders it in a div.
const Components1 = (props) => {
  const x = props.x ?? 0;
  return <div>Components1: {x * 2}</div>;
};

// What does this component show?
// Components2: HELLO WORLD
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
  return <div>Components3: <Foo /></div>;
};

const Foo = () => <Bar />;

const Bar = () => <Baz />;

const Baz = () => <span>Baz</span>;
