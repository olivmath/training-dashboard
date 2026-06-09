import React from 'react';
import KPICard from '../common/KPICard';
import { useBikeData } from '../../hooks/useBikeData';
import { BIKES } from '../../data/dashboardData';

const BikeKPIs: React.FC = () => {
  const {
    totalDistBike, avgSpeedBike, maxDistBike, maxDistBikeData,
    totalDurationBike, avgHRBike
  } = useBikeData();

  return (
    <div className="kpi-grid">
      <KPICard
        label="Distância total"
        value={`${Math.round(totalDistBike)} km`}
        subValue={`${BIKES.length} pedaladas`}
        style={{ color: 'var(--bike)' }}
      />
      <KPICard
        label="Velocidade média"
        value={avgSpeedBike.toFixed(1)}
        subValue="km/h"
      />
      <KPICard
        label="Maior pedalada"
        value={`${maxDistBike.toFixed(1)} km`}
        subValue={maxDistBikeData?.date.split('-').reverse().join('/')}
        valueClass="orange"
      />
      <KPICard
        label="Tempo total"
        value={`${(totalDurationBike / 60).toFixed(1)} h`}
        subValue={`${Math.round(totalDurationBike)} minutos`}
      />
      <KPICard
        label="FC média"
        value={`${Math.round(avgHRBike)} bpm`}
        subValue="zona 2–3"
      />
      <KPICard
        label="Fontes"
        value="Watch + Strava"
        subValue="dez/2024 → mai/2026"
        style={{ fontSize: '18px', letterSpacing: 0 }}
      />
    </div>
  );
};

export default BikeKPIs;
