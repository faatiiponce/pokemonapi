import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonName } from "../../actions/actions";
import "./search.css";

export default function Search({ setPokeCurrent }) {
  const dispatch = useDispatch();
  const pokeFilter = useSelector((state) => state.pokemonsFilter);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    dispatch(getPokemonName(inputValue));
    setInputValue("");
  };
  useEffect(() => {
    setPokeCurrent(pokeFilter);
  }, [pokeFilter, setPokeCurrent]); //atentos al pokeFilter

  return (
    <div className="container-search">
      <input
        className="search"
        placeholder="Search your pokemon"
        type="text"
        value={inputValue} //el value se va actualizando
        onChange={handleInputChange}
      />
      <button className="search-button" type="button" onClick={handleClick}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/770px-Pok%C3%A9_Ball_icon.svg.png"
          alt=""
        />
      </button>
    </div>
  );
}
