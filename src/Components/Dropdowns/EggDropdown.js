import React from 'react';

export default function EggDropdown({ eggGroups, setSelectedEggGroup, selectedEggGroup }) {
  return (
    <div>
      <h5>Egg Dropdown</h5>
      <select value={selectedEggGroup} onChange={(e) => setSelectedEggGroup(e.target.value)}>
        {eggGroups.map((eggGroup) => (
          <option key={eggGroup}>{eggGroup}</option>
        ))}
      </select>
    </div>
  );
}
