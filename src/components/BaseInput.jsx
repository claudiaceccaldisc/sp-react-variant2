import React from 'react';

export default function BaseInput({ value, onChange }) {
  return (
    <div className="input-group">
      <label>Valeur de base :</label>
       <input
        type="text"
        placeholder="Entrez un nombre"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
