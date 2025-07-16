import React from 'react';

export default function BaseInput({ value, onChange }) {
  return (
    <div className="input-group">
      <label>Valeur de base :</label>
      <input
        type="number"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
