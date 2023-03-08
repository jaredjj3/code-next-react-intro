import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';

// TODO: Without changing anything, what does this component do?
export const Events = () => {
  // useRef is a handy way of getting a reference to something in the DOM.
  // See https://reactjs.org/docs/hooks-reference.html#useref
  const canvas = useRef(null);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const onMouseMove = (e) => {
    setX(e.clientX - e.target.offsetLeft);
    setY(e.clientY - e.target.offsetTop);
  };

  // TODO: What do you think will happen if you change isMouseDown to true?
  // After you observe what happens, change it back. Update the component
  // so that isMouseDown is true when the mouse is down and false when the
  // mouse is up.
  useLineDrawnTo(canvas.current, x, y, isMouseDown);

  return (
    <>
      <div>x: {x}</div>
      <div>y: {y}</div>

      <br />

      <canvas ref={canvas} onMouseMove={onMouseMove} />
    </>
  );
};

// NOTE: You don't need to read anything below this line, but feel free to.

// BONUS: What does this code do?
const useLineDrawnTo = (canvas, x, y, active) => {
  const ctx = useCtx(canvas, x, y, active);

  const [isDrawing, setIsDrawing] = useState(false)

  useEffect(() => {
    if (active && ctx) {
      ctx.moveTo(x, y);
      setIsDrawing(true);
    } else {
      setIsDrawing(false);
    }
  }, [active, ctx]);

  useLayoutEffect(() => {
    if (!isDrawing) {
      return;
    }
    if (!ctx) {
      return;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
  }, [ctx, x, y, isDrawing]);
};

// BONUS: What does this code do?
const useCtx = (canvas) => {
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    let ctx = null;
    if (canvas) {
      ctx = canvas.getContext('2d');
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.beginPath();
    }
    setCtx(ctx);
    return () => {
      setCtx(null);
    };
  }, [canvas]);

  return ctx;
};
