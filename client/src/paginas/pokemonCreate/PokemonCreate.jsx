import React from "react";
import { Link } from "react-router-dom";
import Form from "../../componentes/form/Form";
import "./pokemonCreate.css";

export default function PokemonCreate() {
  return (
    <div>
      <div className="nav">
        <img
          height={"30px"}
          src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39092/preview.png"
        />
        <Link to={"/home"}>
          <a>Return to home</a>
        </Link>
      </div>
      <Form />
    </div>
  );
}
