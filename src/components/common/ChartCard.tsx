import React from 'react';

interface ChartCardProps {
  label: string;
  children: React.ReactNode;
  legend?: React.ReactNode;
  fullWidth?: boolean;
  tall?: boolean;
}

const ChartCard: React.FC<ChartCardProps> = ({ label, children, legend, fullWidth, tall }) => (
  <div className={`chart-card ${fullWidth ? 'full' : ''}`}>
    <div className="chart-label">{label}</div>
    {legend && <div className="legend">{legend}</div>}
    <div className={`chart-wrap ${tall ? 'tall' : ''}`}>
      {children}
    </div>
  </div>
);

export default ChartCard;
