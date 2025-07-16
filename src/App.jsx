import React, { useState } from 'react';
import BaseInput from './components/BaseInput';
import PercentageInput from './components/PercentageInput';
import CalculateButton from './components/CalculateButton';
import ResultDisplay from './components/ResultDisplay';

export default function App() {
  const [baseValue, setBaseValue] = useState(0);
  const [percentageValue, setPercentageValue] = useState(0);
  const [result, setResult] = useState(null);

  const handleBaseChange = e => setBaseValue(+e.target.value);
  const handlePercentageChange = e => setPercentageValue(+e.target.value);
  const handleCalculate = () => setResult((baseValue * percentageValue) / 100);

  return (
    <div className="app-container">
      <h1>Calcul de pourcentage</h1>
      <BaseInput value={baseValue} onChange={handleBaseChange} />
      <PercentageInput value={percentageValue} onChange={handlePercentageChange} />
      <CalculateButton onClick={handleCalculate}>
        Calculer
      </CalculateButton>
      <ResultDisplay value={result} />
    </div>
  );
}
