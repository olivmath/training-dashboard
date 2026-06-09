import React from 'react';
import KPICard from '../common/KPICard';
import { useRunData } from '../../hooks/useRunData';
import { fmtPace } from '../../utils/math';

const RunKPIs: React.FC = () => {
  const {
    totalDistRun, totalRuns, avgPace, bestPace5k, bestPaceDate,
    maxDistRun, maxDistRunData, avgHRRun, totalCaloriesRun
  } = useRunData();

  return (
    <div className="kpi-grid">
      <KPICard
        label="Distância total"
        value={`${Math.round(totalDistRun)} km`}
        subValue={`${totalRuns} corridas`}
        valueClass="green"
      />
      <KPICard
        label="Pace médio"
        value={fmtPace(avgPace)}
        subValue="min/km"
      />
      <KPICard
        label="Melhor pace (5km+)"
        value={fmtPace(bestPace5k)}
        subValue={bestPaceDate?.split('-').reverse().join('/')}
        valueClass="orange"
      />
      <KPICard
        label="Maior corrida"
        value={`${maxDistRun.toFixed(1)} km`}
        subValue={`${maxDistRunData?.date.split('-').reverse().join('/')} · ${fmtPace(maxDistRunData?.pace || null)}/km`}
        valueClass="blue"
      />
      <KPICard
        label="FC média"
        value={`${Math.round(avgHRRun)} bpm`}
        subValue="zona aeróbica"
      />
      <KPICard
        label="Calorias estimadas"
        value={`${Math.round(totalCaloriesRun / 1000)} k`}
        subValue="kcal totais"
      />
    </div>
  );
};

export default RunKPIs;
