import React, { useState, useEffect } from 'react';
import { fetchPokemon } from '../services/pokemon';
import PokeCard from '../Components/PokeCard/PokeCard';

export default function Main() {
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchPokemon();
      setPoke(resp);
    };
    fetchData();
  }, []);

  return (
    <div>
      {poke.map((poke) => (
        <PokeCard key={poke.id} {...poke} />
      ))}
    </div>
  );
}
