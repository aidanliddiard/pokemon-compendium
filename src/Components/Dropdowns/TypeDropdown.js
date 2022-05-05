import React from 'react';

export default function TypeDropdown({ types, selectedType, setSelectedType }) {
  return (
    <div>
      <h5>Type Dropdown</h5>
      <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        {types.map((type) => (
          <option key={type}>{type}</option>
        ))}
      </select>
    </div>
  );
}
