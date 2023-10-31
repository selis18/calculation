'use client'
import React, { useState } from 'react';
import { calculateDosage, calculateBodySurfaceArea, calculateOndansetron, calculateMannitol, 
  calculateHydrationRate, calculatePotassiumChloride, calculateCalciumGluconate, calculateMagnesiumSulfate } from './Calculations';

const CalculationPage: React.FC = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [result, setResult] = useState<string>('');

  const handleCalculate = () => {
    const bodySurfaceArea = calculateBodySurfaceArea(height, weight);
    const dosageArray = calculateDosage(bodySurfaceArea);
    const etoposideDosage = dosageArray[0];
    const cisplatinDosage = dosageArray[1];
    const ifosfamideDosage = dosageArray[2];
    const uromitexanDosage = dosageArray[3];
    const ondansetronDosage = calculateOndansetron(weight);
    const mannitolDosage = calculateMannitol(weight);
    const hydrationRate = calculateHydrationRate(bodySurfaceArea);
    const potassiumChlorideDosage = calculatePotassiumChloride(bodySurfaceArea);
    const calciumGluconateDosage = calculateCalciumGluconate(bodySurfaceArea);
    const magnesiumSulfateDosage = calculateMagnesiumSulfate(bodySurfaceArea);

    setResult(`
    <h2>Результаты расчета:</h2>
    <p>Площадь поверхности тела: ${bodySurfaceArea.toFixed(2)} м2</p>
    <h3>Дозировка препаратов:</h3>
    <p>Этопозид: ${etoposideDosage.toFixed(2)} мг</p>
    <p>Цисплатин: ${cisplatinDosage.toFixed(2)} мг</p>
    <p>Ифосфамид: ${ifosfamideDosage.toFixed(2)} мг</p>
    <p>Уромитексан: ${uromitexanDosage.toFixed(2)} мг</p>
    <p>Дозировка ондансетрона: ${ondansetronDosage.toFixed(2)} мг</p>
    <p>Дозировка маннитола: ${mannitolDosage.toFixed(2)} гр</p>
    <p>Гидратация: ${hydrationRate.toFixed(2)} мл/сут</p>
    <p>Дозировка калия хлорида: ${potassiumChlorideDosage.toFixed(2)} мл/сут</p>
    <p>Дозировка кальция глюконата:${calciumGluconateDosage.toFixed(2)} мл/сут</p>
    <p>Дозировка кальция глюконата:${magnesiumSulfateDosage.toFixed(2)} мл/сут</p>
    `);
  }

  return (
    <div>
      <h1>Расчет дозировок и площади поверхности тела</h1>
      
      <label>Рост (см): <input type="text" value={height} onChange={(e) => setHeight(parseFloat(e.target.value))} /></label><br />
      <label>Вес (кг): <input type="text" value={weight} onChange={(e) => setWeight(parseFloat(e.target.value))} /></label><br />
      <button onClick={handleCalculate}>Расчет</button>
      
      <div id="output" dangerouslySetInnerHTML={{ __html: result }}></div>
    </div>
  );
}

export default CalculationPage;