import React from 'react';
import { BIKES, RUNS } from '../data/dashboardData';

interface NavbarProps {
  totalRuns: number;
  totalDistRun: number;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ totalRuns, totalDistRun, toggleTheme }) => {
  const totalDistBike = BIKES.reduce((acc, b) => acc + b.dist_km, 0);

  return (
    <nav>
      <div className="container nav-inner">
        <div>
          <div className="nav-title">Lucas · <span>Running Dashboard</span></div>
          <div className="nav-meta">
            {totalRuns + BIKES.length} atividades · {Math.round(totalDistRun + totalDistBike)} km · mai/2025 → jun/2026
          </div>
        </div>
        <div className="nav-right">
          <button className="theme-btn" onClick={toggleTheme}>☀ / ☾ tema</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
