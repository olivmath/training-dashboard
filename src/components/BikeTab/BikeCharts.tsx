import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import ChartCard from '../common/ChartCard';
import { useBikeData } from '../../hooks/useBikeData';
import { chartOptions } from '../../utils/charts';
import { BIKES } from '../../data/dashboardData';

const BikeCharts: React.FC = () => {
  const {
    volumeLabels, volumeDataValues, volumeBackgroundColors,
    distLabels, distDataValues
  } = useBikeData();

  const speedFilteredBikes = BIKES.filter(b => b.speed_kmh && b.dist_km >= 1);

  return (
    <div className="charts-grid">
      <ChartCard label="Velocidade por pedalada · km/h" fullWidth tall>
        <Line
          data={{
            labels: speedFilteredBikes.map(b => b.date.slice(5)),
            datasets: [{
              data: speedFilteredBikes.map(b => b.speed_kmh),
              borderColor: 'rgba(59,130,246,0.5)',
              backgroundColor: 'rgba(59,130,246,0.05)',
              borderWidth: 1.5,
              pointRadius: 3,
              pointBackgroundColor: speedFilteredBikes.map(b => b.speed_kmh > 20 ? '#3b82f6' : 'rgba(59,130,246,0.4)'),
              fill: true,
              tension: 0.3,
            }]
          }}
          options={chartOptions({
            scales: {
              x: { maxTicksLimit: 14 },
              y: { ticks: { callback: (v: any) => v + ' km/h' } }
            },
            plugins: {
              tooltip: {
                callbacks: {
                  title: (ctx: any) => {
                    const b = speedFilteredBikes[ctx[0].dataIndex];
                    return b.date + ' · ' + b.dist_km.toFixed(1) + ' km';
                  },
                  label: (ctx: any) => 'Velocidade: ' + ctx.raw.toFixed(1) + ' km/h'
                }
              }
            }
          }) as any}
        />
      </ChartCard>

      <ChartCard label="Volume mensal · km">
        <Bar
          data={{
            labels: volumeLabels,
            datasets: [{
              data: volumeDataValues,
              backgroundColor: volumeBackgroundColors,
              borderColor: 'rgba(59,130,246,0.5)', borderWidth: 1, borderRadius: 3,
            }]
          }}
          options={chartOptions({
            scales: { y: { ticks: { callback: (v: any) => v + 'km' } } }
          }) as any}
        />
      </ChartCard>

      <ChartCard label="Distribuição de distâncias">
        <Bar
          data={{
            labels: distLabels,
            datasets: [{
              data: distDataValues,
              backgroundColor: ['rgba(113,113,122,0.4)', 'rgba(59,130,246,0.25)', 'rgba(59,130,246,0.5)', 'rgba(59,130,246,0.35)', 'rgba(249,115,22,0.4)'],
              borderColor: ['#71717a', '#3b82f6', '#3b82f6', 'rgba(59,130,246,0.6)', '#f97316'],
              borderWidth: 1, borderRadius: 3
            }]
          }}
          options={chartOptions({
            scales: { y: { ticks: { callback: (v: any) => v + 'x' } } },
            plugins: { tooltip: { callbacks: { label: (ctx: any) => ctx.raw + ' pedaladas' } } }
          }) as any}
        />
      </ChartCard>
    </div>
  );
};

export default BikeCharts;
