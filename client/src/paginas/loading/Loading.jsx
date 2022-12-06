import React from "react";
import "./loading.css";

export default function Loading() {
  return (
    <div>
      <img
        className="img-loading"
        height={200}
        src="https://cullenk.github.io/Pokemon-Card-Matching-Game/img/charmander-loading.gif"
        alt=""
      />
    </div>
  );
}
