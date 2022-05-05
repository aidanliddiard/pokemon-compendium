import React, { useState, useEffect } from 'react';
import './Main.css';
import { fetchPokemon, fetchType, fetchFiltered, fetchEggGroup } from '../services/pokemon';
import PokeCard from '../Components/PokeCard/PokeCard';
import TypeDropdown from '../Components/Dropdowns/TypeDropdown';
import SeachBar from '../Components/SearchBar/SeachBar';
import Sort from '../Components/Sort/Sort';
import EggDropdown from '../Components/Dropdowns/EggDropdown';

export default function Main() {
  const [poke, setPoke] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [eggGroups, setEggGroups] = useState([]);
  const [selectedEggGroup, setSelectedEggGroup] = useState('all');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchPokemon();
      setPoke(resp);
      const data = await fetchType();
      setTypes(['all', ...data]);
      const eggData = await fetchEggGroup();
      setEggGroups(['all', ...eggData]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchFiltered(selectedType, query, order, selectedEggGroup);
      setPoke(resp);
      setLoading(false);
    };
    fetchData();
  }, [selectedType, query, order, selectedEggGroup]);

  if (loading) return <div className="loader"></div>;

  return (
    <main>
      <header>
        <TypeDropdown types={types} setSelectedType={setSelectedType} selectedType={selectedType} />
        <EggDropdown
          eggGroups={eggGroups}
          selectedEggGroup={selectedEggGroup}
          setSelectedEggGroup={setSelectedEggGroup}
        />
        <SeachBar setQuery={setQuery} />
        <Sort order={order} setOrder={setOrder} />
      </header>
      <div className="cards">
        {poke.map((poke) => (
          <PokeCard key={poke.id} {...poke} />
        ))}
      </div>
    </main>
  );
}
