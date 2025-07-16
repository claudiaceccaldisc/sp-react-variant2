import React from 'react';

export default function CalculateButton({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}
