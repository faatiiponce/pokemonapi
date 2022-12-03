import React from "react";
import { Link } from "react-router-dom";
import "./LadingPage.css";

export default function LandingPage() {
  return (
    <div className="container-inicial">
      <div className="container-secundario">
        <div className="text1">
          <h1>Welcome!</h1>
          <span className="text2">All pokemon information in one place</span>
        </div>
        <Link to="/home">
          <button className="btnInitial">Start</button>
        </Link>
      </div>
    </div>
  );
}
