import React, { useState, useEffect } from 'react';
import { fetchPokemon, fetchType, fetchFiltered } from '../services/pokemon';
import PokeCard from '../Components/PokeCard/PokeCard';
import TypeDropdown from '../Components/TypeDropdown/TypeDropdown';

export default function Main() {
  const [poke, setPoke] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchPokemon();
      setPoke(resp);
      const data = await fetchType();
      setTypes(['all', ...data]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedType === 'all') return setPoke(await fetchPokemon());

      const resp = await fetchFiltered(selectedType);
      setPoke(resp);
    };
    fetchData();
  }, [selectedType]);

  return (
    <div>
      <TypeDropdown types={types} setSelectedType={setSelectedType} selectedType={selectedType} />
      {poke.map((poke) => (
        <PokeCard key={poke.id} {...poke} />
      ))}
    </div>
  );
}
