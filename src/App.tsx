import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import AppHeader from './components/AppHeader';
import RunTab from './components/RunTab';
import BikeTab from './components/BikeTab';
import GlossaryTab from './components/GlossaryTab';
import FAQTab from './components/FAQTab';
import { useRunData } from './hooks/useRunData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeTab, setActiveTab] = useState<'run' | 'bike' | 'glossary' | 'faq'>('run');
  const { totalRuns, totalDistRun } = useRunData();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <div className="app-root">
      <AppHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        totalRuns={totalRuns}
        totalDistRun={totalDistRun}
        toggleTheme={toggleTheme}
      />

      <div className="container main-content">
        {activeTab === 'run' && <RunTab />}
        {activeTab === 'bike' && <BikeTab />}
        {activeTab === 'glossary' && <GlossaryTab />}
        {activeTab === 'faq' && <FAQTab />}
      </div>
    </div>
  );
};

export default App;
