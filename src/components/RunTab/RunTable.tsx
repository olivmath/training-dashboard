import React from 'react';
import { RUNS } from '../../data/dashboardData';
import { fmtPace } from '../../utils/math';

const RunTable: React.FC = () => {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Fonte</th>
            <th>Distância</th>
            <th>Duração</th>
            <th>Pace</th>
            <th>FC média</th>
            <th>Calorias</th>
            <th>Potência</th>
            <th>Passada</th>
            <th>GCT</th>
          </tr>
        </thead>
        <tbody>
          {[...RUNS].reverse().slice(0, 20).map((r, i) => {
            const srcColors: any = { 'Apple Watch de Lucas': '#ef4444', 'Nike Run Club': '#f97316', 'Strava': '#fb923c' };
            const color = srcColors[r.source] || '#71717a';
            const srcName = r.source.includes('Apple') ? 'Apple Watch' : r.source;
            const paceClass = r.pace ? (r.pace < 5.5 ? 'pace-fast' : r.pace > 8 ? 'pace-slow' : '') : '';
            const dur = Math.floor(r.duration_min) + 'min ' + Math.round((r.duration_min % 1) * 60) + 's';
            return (
              <tr key={i}>
                <td>{r.date}</td>
                <td><span className="dot" style={{ background: color }}></span>{srcName}</td>
                <td>{r.dist_km.toFixed(2)} km</td>
                <td>{dur}</td>
                <td className={paceClass}>{r.pace ? fmtPace(r.pace) + '/km' : '—'}</td>
                <td>{r.hr_avg ? r.hr_avg + ' bpm' : '—'}</td>
                <td>{r.calories > 0 ? r.calories + ' kcal' : '—'}</td>
                <td>{r.power_w ? r.power_w + 'W' : '—'}</td>
                <td>{r.stride_m ? r.stride_m + 'm' : '—'}</td>
                <td>{r.gct_ms ? r.gct_ms + 'ms' : '—'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RunTable;
