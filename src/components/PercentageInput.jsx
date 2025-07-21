import React from 'react';

export default function PercentageInput({ value, onChange }) {
  return (
    <div className="input-group">
      <label>Pourcentage (%) :</label>
      <input
        type="number"
        step="any"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
