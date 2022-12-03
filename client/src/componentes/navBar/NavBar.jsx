import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="container">
        <Link to={"/"}>
          <img
            className="imagen"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
            alt="pokemonlogo"
          ></img>
        </Link>
        <Link to={"/create"}>
          <button name="Create" className="button-create">
            Crea tu pokemon!
          </button>
        </Link>
      </div>
    </div>
  );
}
