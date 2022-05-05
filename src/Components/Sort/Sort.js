import React from 'react';

export default function Sort({ order, setOrder }) {
  return (
    <div>
      <h5>Sort Pokemon Alphabetically</h5>
      <label>
        <input
          type="radio"
          value={''}
          checked={order === ''}
          onChange={(e) => setOrder(e.target.value)}
        />
        None
      </label>
      <label>
        <input
          type="radio"
          value={'desc'}
          checked={order === 'desc'}
          onChange={(e) => setOrder(e.target.value)}
        />
        Descending
      </label>
      <label>
        <input
          type="radio"
          value={'asc'}
          checked={order === 'asc'}
          onChange={(e) => setOrder(e.target.value)}
        />
        Ascending
      </label>
    </div>
  );
}
