import React, { useState, useEffect } from 'react';
import { fetchPokemon, fetchType, fetchFiltered } from '../services/pokemon';
import PokeCard from '../Components/PokeCard/PokeCard';
import TypeDropdown from '../Components/TypeDropdown/TypeDropdown';

export default function Main() {
  const [poke, setPoke] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');

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
    if (!selectedType) return;
    const fetchData = async () => {
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
