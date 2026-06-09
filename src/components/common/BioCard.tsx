import React from 'react';

interface BioCardProps {
  label: string;
  value: string | number;
  unit: string;
  fillWidth: string;
  fillColor: string;
  hint: string;
}

const BioCard: React.FC<BioCardProps> = ({ label, value, unit, fillWidth, fillColor, hint }) => (
  <div className="bio-card">
    <div className="bio-label">{label}</div>
    <div className="bio-value" style={{ color: fillColor }}>{value}</div>
    <div className="bio-unit">{unit}</div>
    <div className="bio-bar">
      <div className="bio-fill" style={{ width: fillWidth, background: fillColor }}></div>
    </div>
    <div className="bio-hint">{hint}</div>
  </div>
);

export default BioCard;
