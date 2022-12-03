import React from "react";
import "./notFound.css";

export default function NotFound() {
  return (
    <div className="container">
      <img className="img" src="https://i.gifer.com/nyn.gif" alt="poke-sad" />
      <div className="message">
        <h1>Perdón,</h1>
        <p> No puedo encontrar lo que buscas </p>
      </div>
    </div>
  );
}
