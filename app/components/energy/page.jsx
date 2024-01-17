"use client";
import React, { useState } from "react";

function Energy() {
  const [result, setResult] = useState(0);

  const [gender, setGender] = useState("m");
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [age, setAge] = useState(null);
  const [fa, setFa] = useState("1.1");
  const [tf, setTf] = useState("1");
  const [g, setG] = useState("1");
  const [ts, setTs] = useState("1.0");

  const calculate = () => {
    let oo;
    if (gender === "m") {
      oo = 66.473 + 13.752 * weight + 5.0033 * age - (6.755 - height);
    } else if (gender === "f") {
      oo = 655 + 9.5 * weight + 1.8 * height - 4.7 * age;
    }

    const fre = oo * fa * tf * g * ts;
    setResult(fre.toFixed(2));
  };
  return (
    <div className="m-5">
      <div className="input-container">
        <label
          htmlFor="genders"
          className="text-m font-mono leading-6 text-gray-900"
        >
          Пол:
        </label>
        <select
          name="genders"
          defaultValue={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
        >
          <option value="m">Мужской</option>
          <option value="f">Женский</option>
        </select>
      </div>
      <div className="input-container">
        <label
          htmlFor="weight"
          className="text-m font-mono leading-6 text-gray-900"
        >
          Вес в кг:{" "}
        </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="input-container">
        <label
          htmlFor="height"
          className="text-m font-mono leading-6 text-gray-900"
        >
          Рост в см:{" "}
        </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="input-container">
        <label
          htmlFor="age"
          className="text-m font-mono leading-6 text-gray-900"
        >
          Возраст в годах:
        </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="input-container">
        <label
          htmlFor="fa"
          className="text-m font-mono leading-6 text-gray-900"
        >
          Фактор активности:{" "}
        </label>
        <select
          id="fa"
          onChange={(e) => setFa(e.target.value)}
          className="w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
          value={fa}
        >
          <option value="1.1">Постельный режим</option>
          <option value="1.2">Палатный режим</option>
          <option value="1.3">Общий режим</option>
        </select>
      </div>
      <div className="input-container">
        <label
          htmlFor="tf"
          className="text-m font-mono leading-6 text-gray-900"
        >
          Температурный фактор:{" "}
        </label>
        <select
          id="tf"
          onChange={(e) => setTf(e.target.value)}
          className="w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
          value={tf}
        >
          <option value="1.1">t &lt; 38.0</option>
          <option value="1.2">t &gt;= 38.0, но &lt; 38.9</option>
          <option value="1.3">t &gt;= 39.0, но &lt; 39.9</option>
          <option value="1.4">t &gt;= 40</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="g" className="text-m font-mono leading-6 text-gray-900">
          Гипотрофия:{" "}
        </label>
        <select
          id="g"
          onChange={(e) => setG(e.target.value)}
          className="w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
          value={g}
        >
          <option value="1">Отсутствует</option>
          <option value="1.1">1 степень</option>
          <option value="1.2">2 степень</option>
          <option value="1.3">3 степень</option>
        </select>
      </div>
      <div className="input-container">
        <label
          htmlFor="ts"
          className="text-m font-mono leading-6 text-gray-900"
        >
          Фактор стресса{" "}
        </label>
        <select
          id="ts"
          onChange={(e) => setTs(e.target.value)}
          className="w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
        >
          <option selected value="1.0">
            Отсутствует
          </option>
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
      <button
        onClick={calculate}
        className="mt-2 w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
      >
        Рассчитать
      </button>
      <div className="mt-4 text-gray-900 text-l font-mono leading-7 text-gray-900 result">
        Фактический расход энергии (ФРЭ):{" "}
        <span className="underline decoration-2 decoration-orange-400">
          {result}
        </span>
      </div>
    </div>
  );
}

export default Energy;
