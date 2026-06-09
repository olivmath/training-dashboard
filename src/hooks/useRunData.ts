import { RUNS } from '../data/dashboardData';
import { movingAvg } from '../utils/math';

export const useRunData = () => {
  // Pace Chart Data
  const paceRuns = RUNS.filter(r => r.pace && r.pace < 12 && r.dist_km >= 1);
  const paceAvg = movingAvg(paceRuns.map(r => r.pace), 7);
  const paceData = {
    labels: paceRuns.map(r => r.date.slice(5)),
    datasets: [
      {
        data: paceRuns.map(r => r.pace),
        borderColor: 'rgba(34,197,94,0.45)',
        backgroundColor: 'rgba(34,197,94,0.05)',
        borderWidth: 1.5,
        pointRadius: 3,
        pointBackgroundColor: paceRuns.map(r =>
          (r.pace || 0) < 5.2 ? '#eab308' : (r.pace || 0) < 5.7 ? '#22c55e' : 'rgba(34,197,94,0.5)'
        ),
        fill: true,
        tension: 0.3,
      },
      {
        data: paceAvg,
        borderColor: '#f97316',
        borderWidth: 2,
        borderDash: [5, 3],
        pointRadius: 0,
        tension: 0.4,
      }
    ]
  };

  // Volume Chart Data
  const monthMap: Record<string, number> = {};
  RUNS.forEach(r => { const k = r.date.slice(0, 7); monthMap[k] = (monthMap[k] || 0) + r.dist_km; });
  const months = Object.keys(monthMap).sort();
  const mNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const volumeData = {
    labels: months.map(m => { const [y, mo] = m.split('-'); return mNames[parseInt(mo) - 1] + "'" + y.slice(2); }),
    datasets: [{
      data: months.map(m => parseFloat(monthMap[m].toFixed(1))),
      backgroundColor: months.map(m => monthMap[m] > 40 ? 'rgba(34,197,94,0.6)' : 'rgba(34,197,94,0.25)'),
      borderColor: 'rgba(34,197,94,0.5)',
      borderWidth: 1,
      borderRadius: 3,
    }]
  };

  // Dist Distribution Data
  const bCount = { '<2km': 0, '2–4km': 0, '4–6km': 0, '6–8km': 0, '8–12km': 0, '>12km': 0 };
  RUNS.forEach(r => {
    const d = r.dist_km;
    if (d < 2) bCount['<2km']++;
    else if (d < 4) bCount['2–4km']++;
    else if (d < 6) bCount['4–6km']++;
    else if (d < 8) bCount['6–8km']++;
    else if (d < 12) bCount['8–12km']++;
    else bCount['>12km']++;
  });
  const distData = {
    labels: Object.keys(bCount),
    datasets: [{
      data: Object.values(bCount),
      backgroundColor: ['rgba(113,113,122,0.4)', 'rgba(113,113,122,0.5)', 'rgba(34,197,94,0.5)', 'rgba(34,197,94,0.35)', 'rgba(96,165,250,0.4)', 'rgba(234,179,8,0.4)'],
      borderColor: ['#71717a', '#71717a', '#22c55e', 'rgba(34,197,94,0.6)', '#60a5fa', '#eab308'],
      borderWidth: 1,
      borderRadius: 3,
    }]
  };

  // Run KPIs
  const totalDistRun = RUNS.reduce((acc, r) => acc + r.dist_km, 0);
  const totalRuns = RUNS.length;
  const avgPace = RUNS.filter(r => r.pace).reduce((acc, r) => acc + r.pace!, 0) / RUNS.filter(r => r.pace).length;
  const bestPace5k = Math.min(...RUNS.filter(r => r.dist_km >= 4.9 && r.pace).map(r => r.pace!));
  const bestPaceDate = RUNS.find(r => r.pace === bestPace5k)?.date;
  const maxDistRun = Math.max(...RUNS.map(r => r.dist_km));
  const maxDistRunData = RUNS.find(r => r.dist_km === maxDistRun);
  const avgHRRun = RUNS.filter(r => r.hr_avg).reduce((acc, r) => acc + r.hr_avg!, 0) / RUNS.filter(r => r.hr_avg).length;
  const totalCaloriesRun = RUNS.reduce((acc, r) => acc + r.calories, 0);

  // Biomechanics averages
  const bioRuns = RUNS.filter(r => r.stride_m && r.power_w && r.gct_ms && r.vert_osc_cm);
  const avgStride = bioRuns.reduce((acc, r) => acc + r.stride_m!, 0) / bioRuns.length;
  const avgPower = bioRuns.reduce((acc, r) => acc + r.power_w!, 0) / bioRuns.length;
  const avgGCT = bioRuns.reduce((acc, r) => acc + r.gct_ms!, 0) / bioRuns.length;
  const avgVertOsc = bioRuns.reduce((acc, r) => acc + r.vert_osc_cm!, 0) / bioRuns.length;

  return {
    paceRuns, paceData, volumeData, distData,
    totalDistRun, totalRuns, avgPace, bestPace5k, bestPaceDate,
    maxDistRun, maxDistRunData, avgHRRun, totalCaloriesRun,
    avgStride, avgPower, avgGCT, avgVertOsc
  };
};
