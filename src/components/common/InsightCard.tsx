import React from 'react';

interface InsightCardProps {
  icon: string;
  iconClass: string;
  text: React.ReactNode;
  style?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
}

const InsightCard: React.FC<InsightCardProps> = ({ icon, iconClass, text, style, iconStyle }) => (
  <div className="insight-card" style={style}>
    <div className={`insight-icon ${iconClass}`} style={iconStyle}>{icon}</div>
    <div className="insight-text">{text}</div>
  </div>
);

export default InsightCard;
