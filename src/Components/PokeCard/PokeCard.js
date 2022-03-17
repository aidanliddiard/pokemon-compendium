import React from 'react';
import './PokeCard.css';

export default function PokeCard({ pokemon, type_1, type_2, url_image, ability_1, egg_group_1 }) {
  return (
    <div className={`${type_1} card`}>
      <h2 className="name">{pokemon}</h2>
      <img src={url_image} />
      <p>Type 1: {type_1}</p>
      <p>Type 2: {type_2}</p>
      <p>Ability: {ability_1}</p>
      <p>Egg group: {egg_group_1}</p>
    </div>
  );
}
