import React from 'react';
import { BIKES } from '../../data/dashboardData';

const BikeTable: React.FC = () => {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Fonte</th>
            <th>Nome</th>
            <th>Distância</th>
            <th>Duração</th>
            <th>Velocidade</th>
            <th>FC média</th>
            <th>Calorias</th>
            <th>Elevação</th>
          </tr>
        </thead>
        <tbody>
          {[...BIKES].reverse().map((b, i) => {
            const isWatch = b.source === 'apple_health';
            const color = isWatch ? '#ef4444' : '#3b82f6';
            const srcName = isWatch ? 'Apple Watch' : 'Strava';
            const dur = Math.floor(b.duration_min) + 'min ' + Math.round((b.duration_min % 1) * 60) + 's';
            const spdClass = b.speed_kmh > 20 ? 'pace-fast' : b.speed_kmh < 14 ? 'pace-slow' : '';
            return (
              <tr key={i}>
                <td>{b.date}</td>
                <td><span className="dot" style={{ background: color }}></span>{srcName}</td>
                <td style={{ color: 'var(--muted)', fontSize: '12px' }}>{b.name || '—'}</td>
                <td>{b.dist_km.toFixed(2)} km</td>
                <td>{dur}</td>
                <td className={spdClass}>{b.speed_kmh ? b.speed_kmh.toFixed(1) + ' km/h' : '—'}</td>
                <td>{b.hr_avg ? b.hr_avg + ' bpm' : '—'}</td>
                <td>{b.calories > 0 ? b.calories + ' kcal' : '—'}</td>
                <td>{b.elev_m != null ? b.elev_m + 'm' : '—'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BikeTable;
