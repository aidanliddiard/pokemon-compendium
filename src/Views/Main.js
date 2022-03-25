import React, { useState, useEffect } from 'react';
import './Main.css';
import { fetchPokemon, fetchType, fetchFiltered } from '../services/pokemon';
import PokeCard from '../Components/PokeCard/PokeCard';
import TypeDropdown from '../Components/TypeDropdown/TypeDropdown';
import SeachBar from '../Components/SearchBar/SeachBar';
import Sort from '../Components/Sort/Sort';

export default function Main() {
  const [poke, setPoke] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  //const [eggGroup, setEggGroup] = useState([]);
  //const [selectedeggGroup, setSelectedEggGroup] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchPokemon();
      setPoke(resp);
      const data = await fetchType();
      setTypes(['all', ...data]);
      // const eggData = await fetchEggGroup();
      // console.log(ata);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchFiltered(selectedType, query, order);
      setPoke(resp);
      setLoading(false);
    };
    fetchData();
  }, [selectedType, query, order]);

  if (loading) return <div className="loader"></div>;

  return (
    <main>
      <div>
        <TypeDropdown types={types} setSelectedType={setSelectedType} selectedType={selectedType} />
        <SeachBar setQuery={setQuery} />
        <Sort order={order} setOrder={setOrder} />
      </div>
      <div className="cards">
        {poke.map((poke) => (
          <PokeCard key={poke.id} {...poke} />
        ))}
      </div>
    </main>
  );
}
