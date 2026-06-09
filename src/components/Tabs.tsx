import React from 'react';
import { BIKES } from '../data/dashboardData';

interface TabsProps {
  activeTab: 'run' | 'bike' | 'glossary';
  setActiveTab: (tab: 'run' | 'bike' | 'glossary') => void;
  totalRuns: number;
  totalDistRun: number;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab, totalRuns, totalDistRun }) => {
  const totalDistBike = BIKES.reduce((acc, b) => acc + b.dist_km, 0);

  return (
    <div className="tabs">
      <div className="container tabs-inner">
        <button
          className={`tab-btn ${activeTab === 'run' ? 'active' : ''}`}
          onClick={() => setActiveTab('run')}
        >
          🏃 Corrida <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{totalRuns} · {Math.round(totalDistRun)}km</span>
        </button>
        <button
          className={`tab-btn bike-tab ${activeTab === 'bike' ? 'active' : ''}`}
          onClick={() => setActiveTab('bike')}
        >
          🚴 Bike <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{BIKES.length} · {Math.round(totalDistBike)}km</span>
        </button>
        <button
          className={`tab-btn ${activeTab === 'glossary' ? 'active' : ''}`}
          onClick={() => setActiveTab('glossary')}
        >
          📖 Glossário
        </button>
      </div>
    </div>
  );
};

export default Tabs;
