import React from 'react';

export default function ResultDisplay({ value }) {
  return (
    <div className="result-group">
      <label>Résultat :</label>
      <input
        type="text"
        readOnly
        value={value !== null ? value : ''}
      />
    </div>
  );
}
