import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../actions/actions.js";
import NavBar from "../../componentes/navBar/NavBar.jsx";
import Pokedex from "../../componentes/Pokedex/Pokedex";
import Loading from "../loading/Loading";
import "./home.css";

export default function Home() {
  const dispatch = useDispatch();
  const totalPoke = useSelector((state) => state.pokemonsTotal);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      {totalPoke.length > 0 ? <Pokedex totalPoke={totalPoke} /> : <Loading />}
    </div>
  );
}
