# code-next-react-intro

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/code-next-react-intro)

In this lesson, engineers will

- understand the problems that React solves
- create basic React components
- learn how to track state using React hooks
- create click event handlers

## Components

Components are the building blocks in React. They are declared using functions that return JSX templates.

```js
const Foo = () => {
  return <div>Foo</div>;
};
```

Components are composable.

```js
const Foo = () => {
  return (
    <div>
      Foo stuff
      <Bar />
    </div>
  );
};

const Bar = () => {
  return <div>Bar stuff</div>;
};
```

Components "talk" to each other using props.

```jsx
const Foo = (props) => {
  return <h1><Upcase msg={'hello'} /><h1>;
};

const Upcase = (props) => {
  const msg = props.msg;
  return <div>{msg}</div>;
};
```

### YOUR TURN

Open `src/Components.js` and practice.

## State

## Events