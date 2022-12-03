import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPokemonDetail } from "../../actions/actions";
import Details from "../../componentes/details/Details";
import { Link } from "react-router-dom";
import "./pokemonDetail.css";
import Loading from "../loading/Loading";

export default function PokemonDetail() {
  const dispatch = useDispatch();
  const pokemonDetail = useSelector((state) => state.pokemonDetail);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getPokemonDetail(id.slice(1, id.length)));
  }, [dispatch]);

  const { sprite, life, types, name, height, attack, defense, speed, weight } =
    pokemonDetail;

  const truncateString = (str, num) => {
    if (str.length <= num) return str;
    return str.slice(0, num) + "...";
  };

  return (
    <div className="container-pokemon-detail">
      <div className="nav">
        <Link to={"/home"}>
          <img
            height={"30px"}
            src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39092/preview.png"
            alt=""
          />
          <a>Return to home</a>
        </Link>
      </div>

      {sprite &&
      life &&
      types &&
      name &&
      height &&
      attack &&
      defense &&
      speed &&
      weight ? (
        <Details
          name={name}
          sprite={sprite}
          life={life}
          types={types}
          height={height}
          attack={attack}
          defense={defense}
          speed={speed}
          weight={weight}
          id={id}
        ></Details>
      ) : (
        <Loading />
      )}
    </div>
  );
}
