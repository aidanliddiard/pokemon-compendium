export async function fetchPokemon() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
  const data = await resp.json();
  return data.results;
}

export async function fetchType() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  return data.map((item) => item.type);
}

export async function fetchEggGroup() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/eggGroups');
  const data = await resp.json();
  console.log(data);
}

export async function fetchFiltered(type, query) {
  const params = new URLSearchParams();
  params.set('perPage', 10);
  if (type !== 'all') {
    params.set('type', type);
  }
  if (query) {
    params.set('pokemon', query);
  }

  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await response.json();
  return data.results;
}
