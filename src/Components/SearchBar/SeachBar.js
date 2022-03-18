import React, { useState } from 'react';

export default function SeachBar({ setQuery }) {
  const [value, setValue] = useState('');

  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => setQuery(value)}>Search</button>
    </div>
  );
}
