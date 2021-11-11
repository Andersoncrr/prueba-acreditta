import React from "react";
import "./HeroCard.css";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { Link } from "react-router-dom";

export const HeroCard = ({ hero }) => {
  return (
    <Link to={`./hero/${hero.id}`}>
      <div className="wrapper">
        <div className="cards">
          <figure className="card">
            <img src={hero.image.url} alt="Hero" />
            <figcaption>
              <div className="name">{hero.name}</div>

              <ProgressBar combat={hero.powerstats.combat} ability="combat:" />
              <ProgressBar
                combat={hero.powerstats.durability}
                ability="durability:"
              />
              <ProgressBar
                combat={hero.powerstats.intelligence}
                ability="intelligence:"
              />
              <ProgressBar combat={hero.powerstats.power} ability="power:" />
              <ProgressBar combat={hero.powerstats.speed} ability="speed:" />
              <ProgressBar
                combat={hero.powerstats.strength}
                ability="strength:"
              />
            </figcaption>
          </figure>
        </div>
      </div>
    </Link>
  );
};
