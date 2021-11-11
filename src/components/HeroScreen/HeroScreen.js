import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getHeroById } from "../../helpers/getHeroById";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { Loading } from "../loading/Loading";
import "./HeroScreen.css";
import { reload } from "../../actions/ui";
import { useDispatch } from "react-redux";

export const HeroScreen = ({ history }) => {
  const [hero, setHero] = useState(undefined);
  const { heroeId } = useParams();

  const getData = useCallback(async () => {
    const { data } = await getHeroById(heroeId);
    setHero(data);
  }, [heroeId]);

  useEffect(() => {
    getData();
  }, [getData]);
  const dispatch = useDispatch();
  const handleReturn = () => {
    dispatch(reload());
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  if (!hero) {
    return <Loading />;
  }

  return (
    <div className="wrappercard">
      <button className="button-3" onClick={handleReturn}>
        Return
      </button>
      <div className="cardsone">
        <img src={hero.image.url} alt="Hero" />
      </div>
      <div className="progressbars">
        <div className="namehero">{hero.name}</div>
        <ProgressBar
          className="progress"
          combat={hero.powerstats.combat}
          ability="combat:"
        />
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
        <ProgressBar combat={hero.powerstats.strength} ability="strength:" />
      </div>
      <div className="appearance">
        <h1>appearance</h1>
        <h2>Eye color: {hero.appearance["eye-color"]}</h2>
        <h2>Gender: {hero.appearance.gender}</h2>
        <h2>Hair color: {hero.appearance["hair-color"]}</h2>
        <h2>Heigth: {hero.appearance.height[1]}</h2>
        <h2>Weight: {hero.appearance.weight[1]}</h2>
      </div>
    </div>
  );
};
