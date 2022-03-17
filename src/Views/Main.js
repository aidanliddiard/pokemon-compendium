import React, { useState, useEffect } from 'react';
import './Main.css';
import { fetchPokemon, fetchType, fetchFiltered } from '../services/pokemon';
import PokeCard from '../Components/PokeCard/PokeCard';
import TypeDropdown from '../Components/TypeDropdown/TypeDropdown';
import SeachBar from '../Components/SearchBar/SeachBar';

export default function Main() {
  const [poke, setPoke] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [query, setQuery] = useState('');

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
      //if (selectedType === 'all' && query === '') return setPoke(await fetchPokemon());

      const resp = await fetchFiltered(selectedType, query);
      setPoke(resp);
    };
    fetchData();
  }, [selectedType, query]);

  console.log('query', query);

  return (
    <main>
      <header>
        <TypeDropdown types={types} setSelectedType={setSelectedType} selectedType={selectedType} />
        <SeachBar setQuery={setQuery} />
      </header>
      <div className="cards">
        {poke.map((poke) => (
          <PokeCard key={poke.id} {...poke} />
        ))}
      </div>
    </main>
  );
}
