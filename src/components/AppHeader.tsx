import React from 'react';
import { BIKES } from '../data/dashboardData';

interface AppHeaderProps {
  activeTab: 'run' | 'bike' | 'glossary';
  setActiveTab: (tab: 'run' | 'bike' | 'glossary') => void;
  totalRuns: number;
  totalDistRun: number;
  toggleTheme: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  activeTab,
  setActiveTab,
  totalRuns,
  totalDistRun,
  toggleTheme,
}) => {
  const totalDistBike = BIKES.reduce((acc, b) => acc + b.dist_km, 0);

  return (
    <header className="app-header">
      <div className="container">
        <div className="header-top">
          <div className="header-info">
            <div className="nav-title">Lucas · <span>Running Dashboard</span></div>
            <div className="nav-meta">
              {totalRuns + BIKES.length} atividades · {Math.round(totalDistRun + totalDistBike)} km · mai/2025 → jun/2026
            </div>
          </div>
          <div className="header-actions">
            <button className="theme-btn" onClick={toggleTheme}>☀/☾</button>
          </div>
        </div>
        
        <div className="header-tabs">
          <button
            className={`tab-btn ${activeTab === 'run' ? 'active' : ''}`}
            onClick={() => setActiveTab('run')}
          >
            🏃 Corrida <span className="tab-count">{totalRuns}</span>
          </button>
          <button
            className={`tab-btn bike-tab ${activeTab === 'bike' ? 'active' : ''}`}
            onClick={() => setActiveTab('bike')}
          >
            🚴 Bike <span className="tab-count">{BIKES.length}</span>
          </button>
          <button
            className={`tab-btn ${activeTab === 'glossary' ? 'active' : ''}`}
            onClick={() => setActiveTab('glossary')}
          >
            📖 Glossário
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
