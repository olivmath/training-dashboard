import React from 'react';

interface KPICardProps {
  label: string;
  value: string | number;
  subValue?: string;
  valueClass?: string;
  style?: React.CSSProperties;
}

const KPICard: React.FC<KPICardProps> = ({ label, value, subValue, valueClass, style }) => (
  <div className="kpi" style={style}>
    <div className="kpi-label">{label}</div>
    <div className={`kpi-value ${valueClass || ''}`}>{value}</div>
    {subValue && <div className="kpi-sub">{subValue}</div>}
  </div>
);

export default KPICard;
