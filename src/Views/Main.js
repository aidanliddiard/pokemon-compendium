import React, { useState, useEffect } from 'react';
import { fetchPokemon } from '../services/pokemon';

export default function Main() {
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchPokemon();
      setPoke(resp);
    };
    fetchData();
  }, []);

  return <div></div>;
}
