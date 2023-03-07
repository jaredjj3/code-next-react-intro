# code-next-react-intro

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/code-next-react-intro)

In this lesson, engineers will

- understand the problems that React solves
- create basic React components
- learn how to track state using React hooks
- create click event handlers

## Components

Components are the building blocks in React. They are declared using functions that return JSX templates.

```jsx
const Foo = () => {
  return <div>Foo</div>;
};
```

Components are composable.

```jsx
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

**KEY TAKEAWAY:** React makes it easy to synchronize state and what the user sees.

State is internal component data. It can be passed to other components via props. React has a hook `useState`, which allows you to get and set state.

```jsx
// GOOD
const Foo = () => {
  const [count, setCount] = useState(0); // 0 is the initial state

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </>
  );
};
```

>NOTE: See this [article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) for an explanation of the destructuring assignment syntax.

You cannot declare state without using `useState`.

```jsx
// BAD
const Foo = () => {
  // React has no idea about this and cannot "react" to changes.
  let count = 0;

  return (
    <>
      <div>{count}</div>
      <button onClick={() => count++}>increment</button>
    </>
  );
};
```

The `setState` function can take the new value, or another _function_ that takes the current value as an argument and returns the new value.

```jsx
const Foo = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    // NOTE: The count variable is shadowed, but that's usually ok in this context.
    setState((count) => count + 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>increment</button>
    </>
  );
};
```

### YOUR TURN

Open `src/State.js` and practice.

## Events