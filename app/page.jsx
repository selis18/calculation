'use client'
import React, { useState } from 'react';
import { calculateDosage, calculateBodySurfaceArea, calculateOndansetron, calculateMannitol, 
  calculateHydrationRate, calculatePotassiumChloride, calculateCalciumGluconate, calculateMagnesiumSulfate } from './Calculations';

function CalculationPage() {
  let [height, setHeight] = useState(0);
  let [weight, setWeight] = useState(0);
  let bodySurfaceArea = calculateBodySurfaceArea(height, weight);
  let dosageArray = calculateDosage(bodySurfaceArea);
  let etoposideDosage = dosageArray[0];
  let cisplatinDosage = dosageArray[1];
  let ifosfamideDosage = dosageArray[2];
  let uromitexanDosage = dosageArray[3];
  let ondansetronDosage = calculateOndansetron(weight);
  let mannitolDosage = calculateMannitol(weight);
  let hydrationRate = calculateHydrationRate(bodySurfaceArea);
  let potassiumChlorideDosage = calculatePotassiumChloride(bodySurfaceArea);
  let calciumGluconateDosage = calculateCalciumGluconate(bodySurfaceArea);
  let magnesiumSulfateDosage = calculateMagnesiumSulfate(bodySurfaceArea);

  const [result, setResult] = useState('');

  isNaN(height)? height=0 : height;
  isNaN(weight)? weight=0 : weight;

  const handleCalculate = () => {
    bodySurfaceArea = calculateBodySurfaceArea(height, weight);
    dosageArray = calculateDosage(bodySurfaceArea);
    etoposideDosage = dosageArray[0];
    cisplatinDosage = dosageArray[1];
    ifosfamideDosage = dosageArray[2];
    uromitexanDosage = dosageArray[3];
    ondansetronDosage = calculateOndansetron(weight);
    mannitolDosage = calculateMannitol(weight);
    hydrationRate = calculateHydrationRate(bodySurfaceArea);
    potassiumChlorideDosage = calculatePotassiumChloride(bodySurfaceArea);
    calciumGluconateDosage = calculateCalciumGluconate(bodySurfaceArea);
    magnesiumSulfateDosage = calculateMagnesiumSulfate(bodySurfaceArea);

    {/*setResult(`
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-xl font-mono font-semibold leading-7 text-gray-900">Результаты расчета:</h2>
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
    </div>
  `);*/}
  };

  return (
    <div className='h-screen flex items-center justify-center grid justify-items-stretch bg-zinc-400'>
      <div className=" justify-self-center max-w-md bg-zinc-100 rounded-md p-6">
        <h1 className="text-xl font-mono font-semibold leading-7 text-gray-900">Калькулятор</h1>
        <p className="mt-1 font-mono font-light text-base leading-6 text-gray-600">Расчет дозировок и площади поверхности тела</p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3 ">
            <label htmlFor="height" className="block text-m font-mono leading-6 text-gray-900">
              Рост (см):
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="height"
                id="height"
                value={height}
                onChange={(e) => setHeight(parseFloat(e.target.value))}
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="weight" className="block font-mono text-m font-medium leading-6 text-gray-900">
              Вес (кг):
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="weight"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(parseFloat(e.target.value))}
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

        </div>
      
      {/*<button
        type="submit"
        className="rounded-full bg-indigo-600 px-8 py-2 m-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleCalculate}
      >
        Расчет
      </button>

     <div id="output" dangerouslySetInnerHTML={{ __html: result }}></div>*/}
    <div className='pt-12'>
      <h2 className='text-xl font-mono font-semibold leading-7 text-gray-900'>Результаты расчета:</h2>
        <p className='mt-4 text-gray-900'>Площадь поверхности тела: <span className='underline decoration-2 decoration-orange-400'>{bodySurfaceArea.toFixed(2)}</span> м2</p>
      <ol className='list-decimal list-inside' >Дозировка препаратов:
        <li>Этопозид: <span className='underline decoration-2 decoration-emerald-500'>{etoposideDosage.toFixed(2)}</span> мг</li>
        <li >Цисплатин: <span className='underline decoration-2 decoration-emerald-500'>{cisplatinDosage.toFixed(2)}</span> мг</li>
        <li>Ифосфамид: <span className='underline decoration-2 decoration-emerald-500'>{ifosfamideDosage.toFixed(2)}</span> мг</li>
        <li>Уромитексан: <span className='underline decoration-2 decoration-emerald-500'>{uromitexanDosage.toFixed(2)}</span> мг</li>
        <li>Дозировка ондансетрона: <span className='underline decoration-2 decoration-emerald-500'>{ondansetronDosage.toFixed(2)}</span> мг</li>
        <li>Дозировка маннитола: <span className='underline decoration-2 decoration-emerald-500'>{mannitolDosage.toFixed(2)}</span> гр</li>
        <li>Гидратация: <span className='underline decoration-2 decoration-emerald-500'>{hydrationRate.toFixed(2)}</span> мл/сут</li>
        <li>Дозировка калия хлорида: <span className='underline decoration-2 decoration-emerald-500'>{potassiumChlorideDosage.toFixed(2)}</span> мл/сут</li>
        <li>Дозировка кальция глюконата: <span className='underline decoration-2 decoration-emerald-500'>{calciumGluconateDosage.toFixed(2)}</span> мл/сут</li>
        <li>Дозировка кальция глюконата: <span className='underline decoration-2 decoration-emerald-500'>{magnesiumSulfateDosage.toFixed(2)}</span> мл/сут</li>
        </ol>
    </div>

    </div>
    </div>
  );
}

export default CalculationPage;