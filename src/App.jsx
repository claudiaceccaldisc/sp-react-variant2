import React, { useState } from 'react'
import BaseInput from './components/BaseInput'
import PercentageInput from './components/PercentageInput'
import CalculateButton from './components/CalculateButton'
import ResultDisplay from './components/ResultDisplay'

export default function App() {
  const [baseValue, setBaseValue] = useState('')
  const [percentageValue, setPercentageValue] = useState('')
  const [result, setResult] = useState(null)

  const handleBaseChange = e => setBaseValue(e.target.value)
  const handlePercentageChange = e => setPercentageValue(e.target.value)
  const handleCalculate = () => {
    const baseNum = parseFloat(baseValue)
    const pctNum  = parseFloat(percentageValue)
    if (!isNaN(baseNum) && !isNaN(pctNum)) {
      setResult((baseNum * pctNum) / 100)
    } else {
      setResult('Entrée invalide')
    }
  }
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
  )
}
