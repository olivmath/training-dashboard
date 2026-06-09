import { BIKES } from '../data/dashboardData';

export const useBikeData = () => {
  const totalDistBike = BIKES.reduce((acc, b) => acc + b.dist_km, 0);
  const totalDurationBike = BIKES.reduce((acc, b) => acc + b.duration_min, 0);
  const avgSpeedBike = BIKES.reduce((acc, b) => acc + b.speed_kmh, 0) / BIKES.length;
  const maxDistBike = Math.max(...BIKES.map(b => b.dist_km));
  const maxDistBikeData = BIKES.find(b => b.dist_km === maxDistBike);
  const avgHRBike = BIKES.filter(b => b.hr_avg).reduce((acc, b) => acc + b.hr_avg!, 0) / BIKES.filter(b => b.hr_avg).length;

  const mNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  
  const volumeLabels = (() => {
    const bm: any = {};
    BIKES.forEach(b => { const k = b.date.slice(0, 7); bm[k] = (bm[k] || 0) + b.dist_km; });
    return Object.keys(bm).sort().map(m => { const [y, mo] = m.split('-'); return mNames[parseInt(mo) - 1] + "'" + y.slice(2); });
  })();

  const volumeDataValues = (() => {
    const bm: any = {};
    BIKES.forEach(b => { const k = b.date.slice(0, 7); bm[k] = (bm[k] || 0) + b.dist_km; });
    return Object.keys(bm).sort().map(m => parseFloat(bm[m].toFixed(1)));
  })();

  const volumeBackgroundColors = (() => {
    const bm: any = {};
    BIKES.forEach(b => { const k = b.date.slice(0, 7); bm[k] = (bm[k] || 0) + b.dist_km; });
    return Object.keys(bm).sort().map(m => bm[m] > 30 ? 'rgba(59,130,246,0.6)' : 'rgba(59,130,246,0.25)');
  })();

  const distLabels = ['<2km', '2–5km', '5–8km', '8–12km', '>12km'];
  const distDataValues = (() => {
    const bd = { '<2km': 0, '2–5km': 0, '5–8km': 0, '8–12km': 0, '>12km': 0 };
    BIKES.forEach(b => {
      if (b.dist_km < 2) bd['<2km']++;
      else if (b.dist_km < 5) bd['2–5km']++;
      else if (b.dist_km < 8) bd['5–8km']++;
      else if (b.dist_km < 12) bd['8–12km']++;
      else bd['>12km']++;
    });
    return Object.values(bd);
  })();

  return {
    totalDistBike, totalDurationBike, avgSpeedBike, maxDistBike, maxDistBikeData, avgHRBike,
    volumeLabels, volumeDataValues, volumeBackgroundColors,
    distLabels, distDataValues
  };
};
