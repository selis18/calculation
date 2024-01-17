"use client";
import React, { useState } from "react";

function Energy() {
  const [result, setResult] = useState('');


    const [gender, setGender] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [fa, setFa] = useState('1.1');
    const [tf,setTf] = useState('1');
    const [g, setG] = useState('1');
    const [ts, setTs] = useState('1.0');
    const calculate = () => {
    let oo;
    if (gender === "m") {
      oo = 66.473 + 13.752 * weight + 5.0033 * age - (6.755 - height);
    } else if (gender === "f") {
      oo = 655 + 9.5 * weight + 1.8 * height - 4.7 * age;
    }

    const fre = oo * fa * tf * g * ts;
    setResult("Фактический расход энергии (ФРЭ): " + fre.toFixed(2));
  };
  return (
    <div>
      <div className="input-container">
        <label htmlFor="genders">Пол: </label>
        <select id="genders" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="m">Мужской</option>
          <option value="f">Женский</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="weight">Вес в кг: </label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div className="input-container">
        <label htmlFor="height">Рост в см: </label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div className="input-container">
        <label htmlFor="age">Возраст в годах: </label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div className="input-container">
        <label htmlFor="fa">Фактор активности: </label>
        <select id="fa" value={fa} onChange={(e) => setFa(e.target.value)}>
          <option value="1.1">Постельный режим</option>
          <option value="1.2">Палатный режим</option>
          <option value="1.3">Общий режим</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="tf">Температурный фактор: </label>
        <select id="tf" value={tf} onChange={(e) => setTf(e.target.value)}>
          <option value="1.1">t &lt; 38.0</option>
          <option value="1.2">t &gt;= 38.0, но &lt; 38.9</option>
          <option value="1.3">t &gt;= 39.0, но &lt; 39.9</option>
          <option value="1.4">t &gt;= 40</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="g">Гипотрофия: </label>
        <select id="g" value={g} onChange={(e) => setG(e.target.value)}>
          <option value="1">Отсутствует</option>
          <option value="1.1">1 степень</option>
          <option value="1.2">2 степень</option>
          <option value="1.3">3 степень</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="ts">Фактор стресса </label>
        <select id="ts">
          <option selected value="1.0">Отсутствует</option>
          <option value="1.2">Малые операции</option>
          <option value="1.3">Большие операции</option>
          <option value="1.4">Перитонит</option>
          <option value="1.5">Сепсис</option>
          <option value="1.6">Тяжелые травмы</option>
          <option value="1.7">Ожоги &lt; 30%</option>
          <option value="1.8">Ожоги &gt;= 30% и &lt;= 49%</option>
          <option value="2">Ожоги &gt;= 50%</option>
        </select>
      </div>
      <button onClick={calculate}>Рассчитать</button>
      <div className="result" id="result">
        {result}
      </div>
    </div>
  );
}

export default Energy;
