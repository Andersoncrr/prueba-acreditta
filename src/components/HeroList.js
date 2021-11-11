import React from "react";
import { HeroCard } from "./HeroCard/HeroCard";

export const HeroList = ({ data }) => {
  return (
    <>
      {data.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </>
  );
};
