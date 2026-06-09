import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import ChartCard from '../common/ChartCard';
import { useRunData } from '../../hooks/useRunData';
import { chartOptions } from '../../utils/charts';
import { fmtPace } from '../../utils/math';

const RunCharts: React.FC = () => {
  const { paceRuns, paceData, volumeData, distData } = useRunData();

  return (
    <div className="charts-grid">
      <ChartCard
        label="Pace por corrida · mínimo/km"
        fullWidth
        tall
        legend={
          <>
            <div className="legend-item"><div className="legend-swatch" style={{ background: 'var(--accent)', opacity: .5 }}></div>pace individual</div>
            <div className="legend-item"><div className="legend-swatch" style={{ background: 'var(--accent2)' }}></div>média móvel 7 corridas</div>
          </>
        }
      >
        <Line data={paceData} options={chartOptions({
          scales: {
            x: { ticks: { maxTicksLimit: 12 } },
            y: {
              reverse: true,
              min: 4.5, max: 12,
              ticks: { callback: (v: any) => fmtPace(v) },
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                title: (ctx: any) => paceRuns[ctx[0].dataIndex]?.date + ' · ' + paceRuns[ctx[0].dataIndex]?.dist_km.toFixed(1) + ' km',
                label: (ctx: any) => 'Pace: ' + fmtPace(ctx.raw) + '/km',
              },
            },
          },
        }) as any} />
      </ChartCard>

      <ChartCard label="Volume mensal · km">
        <Bar data={volumeData} options={chartOptions({
          scales: {
            y: { ticks: { callback: (v: any) => v + 'km' } }
          }
        }) as any} />
      </ChartCard>

      <ChartCard label="Distribuição de distâncias">
        <Bar data={distData} options={chartOptions({
          scales: {
            y: { ticks: { callback: (v: any) => v + 'x' } }
          }
        }) as any} />
      </ChartCard>
    </div>
  );
};

export default RunCharts;
