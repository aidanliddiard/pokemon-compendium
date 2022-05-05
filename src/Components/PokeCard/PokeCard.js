import React from 'react';
import './PokeCard.css';

export default function PokeCard({
  pokemon,
  type_1,
  type_2,
  url_image,
  ability_1,
  egg_group_1,
  color_1,
  color_2,
}) {
  if (color_2 === 'NA') color_2 = '#FFFFFF';

  return (
    <div
      className="card"
      style={{
        border: `15px solid ${color_1}`,
      }}
    >
      <h2 className="name">{pokemon}</h2>
      <img src={url_image} style={{ border: `10px solid ${color_2}` }} />
      <p>Type 1: {type_1}</p>
      <p>Type 2: {type_2}</p>
      <p>Ability: {ability_1}</p>
      <p>Egg group: {egg_group_1}</p>
    </div>
  );
}
