'use client'
import React, { useState } from 'react';
import CalculationPage from './components/dosages/page';
import Energy from './components/energy/page'

const Tab = ({ label, active, onClick }) => (
  <div
    className={`tab ${active ? 'active' : ''}`}
    onClick={onClick}
  >
    {label} 
  </div>
);

const TabContent = ({ content }) => (
  <div className="tab-content">{content}</div>
);

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <header className="bg-white tabs">
      <nav className="bg-zinc-50 flex max-w-xl items-center justify-between p-1 lg:px-8 tab-list">
        {tabs.map((tab, index) => (
          <Tab
            className='border-2 mt-1 font-mono font-light text-base leading-6 text-gray-600'
            key={index}
            label={tab.label}
            active={index === activeTab}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </nav>
      <TabContent content={tabs[activeTab].content} />
    </header >
  );
};

const tabs = [
  { label: 'Расчет дозировок и площади поверхности тела', content: <CalculationPage /> },
  { label: 'Расчет фактического расхода энергии', content: <Energy /> },

];

const Main = () => (
    <div className="h-screen flex items-center justify-center grid justify-items-stretch bg-zinc-400">
        <div className=" justify-self-center max-w-md bg-zinc-100 rounded-md p-6">
            <h1 className="mb-2 text-xl font-mono font-semibold leading-7 text-gray-900">
                Калькулятор
            </h1>
    <Tabs tabs={tabs} />
    </div>
  </div>
);

export default Main;
