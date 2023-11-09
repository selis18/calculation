'use client'
import React, { useState } from 'react';
import ChemicalDosage from './chemical_dosage'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function CalculationsPage() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/ChemicalDosage' className="bg-blue-800 text-white font-bold rounded px-4 py-2 inline-block mt-4" >Расчет дозировок и площади поверхности тела</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/ChemicalDosage' element={<ChemicalDosage />} />
      </Routes>
    </Router>
  );
}

export default CalculationsPage;