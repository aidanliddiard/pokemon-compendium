import React from 'react';

export default function PokeCard({ pokemon, type_1, type_2 }) {
  return (
    <div>
      <h2>{pokemon}</h2>
      <p>
        ({type_1}, {type_2})
      </p>
    </div>
  );
}
