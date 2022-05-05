import React, { useState } from 'react';

export default function SeachBar({ setQuery }) {
  const [value, setValue] = useState('');

  return (
    <div>
      <h5>Search for a pokmon...</h5>
      <input onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => setQuery(value)}>Search</button>
    </div>
  );
}
