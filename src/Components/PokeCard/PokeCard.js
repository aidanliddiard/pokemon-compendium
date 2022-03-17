import React from 'react';
import './PokeCard.css';

export default function PokeCard({ pokemon, type_1, type_2, url_image }) {
  return (
    <div className={`${type_1} card`}>
      <h2 className="name">{pokemon}</h2>
      <img src={url_image} />
      <p>
        ({type_1}, {type_2})
      </p>
    </div>
  );
}
