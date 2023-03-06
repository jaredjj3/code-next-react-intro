import React from "react";
import { State } from './State';
import { Components } from './Components'; 
import { Events } from './Events'; 
import "./style.css";

export default function App() {
  return (
    <>
      <h1>code-next-react-intro</h1>
      
      <hr />

      <h2>Components</h2>
      <Components />

      <h2>State</h2>
      <State />

      <h2>Events</h2>
      <Events />
    </>
  );
}
