import React, { useState, useEffect } from 'react';
import './App.css';
import { RUNS, BIKES, GLOSSARY } from './data/dashboardData';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function fmtPace(v: number | null) {
  if (!v) return '—';
  const m = Math.floor(v), s = Math.round((v - m) * 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function movingAvg(data: (number | null)[], n: number) {
  return data.map((_, i) => {
    if (i < n - 1) return null;
    const s = data.slice(i - n + 1, i + 1).filter(v => v !== null) as number[];
    return s.length ? s.reduce((a, b) => a + b, 0) / s.length : null;
  });
}

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeTab, setActiveTab] = useState<'run' | 'bike' | 'glossary'>('run');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const getVar = (name: string) => {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  };

  const chartOptions = (extra = {}) => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: getVar('--surface'),
        borderColor: getVar('--border'),
        borderWidth: 1,
        titleColor: getVar('--text'),
        bodyColor: getVar('--muted'),
        titleFont: { family: 'Inter', size: 12 },
        bodyFont: { family: 'Inter', size: 11 },
        padding: 10,
      }
    },
    scales: {
      x: {
        grid: { color: getVar('--border') },
        ticks: { color: getVar('--muted'), font: { family: 'Inter', size: 10 }, maxTicksLimit: 10 }
      },
      y: {
        grid: { color: getVar('--border') },
        ticks: { color: getVar('--muted'), font: { family: 'Inter', size: 10 } }
      }
    },
    ...extra
  });

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

  return (
    <div className="app-root">
      <nav>
        <div className="container nav-inner">
          <div>
            <div className="nav-title">Lucas · <span>Running Dashboard</span></div>
            <div className="nav-meta">{totalRuns + BIKES.length} atividades · {Math.round(totalDistRun + BIKES.reduce((acc, b) => acc + b.dist_km, 0))} km · mai/2025 → jun/2026</div>
          </div>
          <div className="nav-right">
            <button className="theme-btn" onClick={toggleTheme}>☀ / ☾ tema</button>
          </div>
        </div>
      </nav>

      <div className="tabs">
        <div className="container tabs-inner">
          <button className={`tab-btn ${activeTab === 'run' ? 'active' : ''}`} onClick={() => setActiveTab('run')}>🏃 Corrida <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{totalRuns} · {Math.round(totalDistRun)}km</span></button>
          <button className={`tab-btn bike-tab ${activeTab === 'bike' ? 'active' : ''}`} onClick={() => setActiveTab('bike')}>🚴 Bike <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{BIKES.length} · {Math.round(BIKES.reduce((acc, b) => acc + b.dist_km, 0))}km</span></button>
          <button className={`tab-btn ${activeTab === 'glossary' ? 'active' : ''}`} onClick={() => setActiveTab('glossary')}>📖 Glossário</button>
        </div>
      </div>

      <div className="container main-content">
        {activeTab === 'run' && (
          <div id="tab-run" className="tab-pane active">
            <section>
              <div className="section-label">Resumo geral</div>
              <div className="kpi-grid">
                <div className="kpi">
                  <div className="kpi-label">Distância total</div>
                  <div className="kpi-value green">{Math.round(totalDistRun)} km</div>
                  <div className="kpi-sub">{totalRuns} corridas</div>
                </div>
                <div className="kpi">
                  <div className="kpi-label">Pace médio</div>
                  <div className="kpi-value">{fmtPace(avgPace)}</div>
                  <div className="kpi-sub">min/km</div>
                </div>
                <div className="kpi">
                  <div className="kpi-label">Melhor pace (5km+)</div>
                  <div className="kpi-value orange">{fmtPace(bestPace5k)}</div>
                  <div className="kpi-sub">{bestPaceDate?.split('-').reverse().join('/')}</div>
                </div>
                <div className="kpi">
                  <div className="kpi-label">Maior corrida</div>
                  <div className="kpi-value blue">{maxDistRun.toFixed(1)} km</div>
                  <div className="kpi-sub">{maxDistRunData?.date.split('-').reverse().join('/')} · {fmtPace(maxDistRunData?.pace || null)}/km</div>
                </div>
                <div className="kpi">
                  <div className="kpi-label">FC média</div>
                  <div className="kpi-value">{Math.round(avgHRRun)} bpm</div>
                  <div className="kpi-sub">zona aeróbica</div>
                </div>
                <div className="kpi">
                  <div className="kpi-label">Calorias estimadas</div>
                  <div className="kpi-value">{Math.round(totalCaloriesRun / 1000)} k</div>
                  <div className="kpi-sub">kcal totais</div>
                </div>
              </div>
            </section>

            <section>
              <div className="section-label">Desempenho ao longo do tempo</div>
              <div className="charts-grid">
                <div className="chart-card full">
                  <div className="chart-label">Pace por corrida · mínimo/km</div>
                  <div className="legend">
                    <div className="legend-item"><div className="legend-swatch" style={{ background: 'var(--accent)', opacity: .5 }}></div>pace individual</div>
                    <div className="legend-item"><div className="legend-swatch" style={{ background: 'var(--accent2)' }}></div>média móvel 7 corridas</div>
                  </div>
                  <div className="chart-wrap tall">
                    <Line data={paceData} options={chartOptions({
                      scales: {
                        x: { grid: { color: getVar('--border') }, ticks: { color: getVar('--muted'), font: { family: 'Inter', size: 10 }, maxTicksLimit: 12 } },
                        y: {
                          reverse: true,
                          min: 4.5, max: 12,
                          grid: { color: getVar('--border') },
                          ticks: { color: getVar('--muted'), font: { family: 'Inter', size: 10 }, callback: (v: any) => fmtPace(v) }
                        }
                      },
                      plugins: {
                        tooltip: {
                          callbacks: {
                            title: (ctx: any) => paceRuns[ctx[0].dataIndex]?.date + ' · ' + paceRuns[ctx[0].dataIndex]?.dist_km.toFixed(1) + ' km',
                            label: (ctx: any) => 'Pace: ' + fmtPace(ctx.raw) + '/km'
                          }
                        }
                      }
                    }) as any} />
                  </div>
                </div>
                <div className="chart-card">
                  <div className="chart-label">Volume mensal · km</div>
                  <div className="chart-wrap">
                    <Bar data={volumeData} options={chartOptions({
                      scales: {
                        y: { ticks: { callback: (v: any) => v + 'km' } }
                      }
                    }) as any} />
                  </div>
                </div>
                <div className="chart-card">
                  <div className="chart-label">Distribuição de distâncias</div>
                  <div className="chart-wrap">
                    <Bar data={distData} options={chartOptions({
                      scales: {
                        y: { ticks: { callback: (v: any) => v + 'x' } }
                      }
                    }) as any} />
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="section-label">Biomecânica · Apple Watch (média das corridas com sensores)</div>
              <div className="bio-grid">
                <div className="bio-card">
                  <div className="bio-label">Comprimento de passada</div>
                  <div className="bio-value" style={{ color: 'var(--accent)' }}>{avgStride.toFixed(2)}</div>
                  <div className="bio-unit">metros por passada</div>
                  <div className="bio-bar"><div className="bio-fill" style={{ width: `${(avgStride / 1.4) * 100}%`, background: 'var(--accent)' }}></div></div>
                  <div className="bio-hint">Bom · objetivo ≥ 1,10 m</div>
                </div>
                <div className="bio-card">
                  <div className="bio-label">Potência de corrida</div>
                  <div className="bio-value" style={{ color: 'var(--accent2)' }}>{Math.round(avgPower)}</div>
                  <div className="bio-unit">watts (média)</div>
                  <div className="bio-bar"><div className="bio-fill" style={{ width: `${(avgPower / 300) * 100}%`, background: 'var(--accent2)' }}></div></div>
                  <div className="bio-hint">Moderado · elite &gt; 250 W</div>
                </div>
                <div className="bio-card">
                  <div className="bio-label">Tempo de contato solo</div>
                  <div className="bio-value" style={{ color: 'var(--accent2)' }}>{Math.round(avgGCT)}</div>
                  <div className="bio-unit">milissegundos</div>
                  <div className="bio-bar"><div className="bio-fill" style={{ width: `${(230 / avgGCT) * 100}%`, background: 'var(--accent2)' }}></div></div>
                  <div className="bio-hint">Alto · objetivo &lt; 230 ms</div>
                </div>
                <div className="bio-card">
                  <div className="bio-label">Oscilação vertical</div>
                  <div className="bio-value" style={{ color: 'var(--accent)' }}>{avgVertOsc.toFixed(1)}</div>
                  <div className="bio-unit">centímetros</div>
                  <div className="bio-bar"><div className="bio-fill" style={{ width: `${(10 / avgVertOsc) * 100}%`, background: 'var(--accent)' }}></div></div>
                  <div className="bio-hint">Ótimo · ideal entre 6–10 cm</div>
                </div>
              </div>
            </section>

            <section>
              <div className="section-label">Insights</div>
              <div className="insights-grid">
                <div className="insight-card">
                  <div className="insight-icon g">↑</div>
                  <div className="insight-text">Pico de <b>5:01/km</b> em agosto 2025. Em jul–ago fez <em>8 corridas em ~4 semanas</em> — maior consistência do período e melhor resultado.</div>
                </div>
                <div className="insight-card">
                  <div className="insight-icon o">!</div>
                  <div className="insight-text">Dois gaps longos: <em>6 semanas</em> (set→out/2025) e <em>7 semanas</em> (nov/2025→jan/2026). Cada pausa custa semanas de adaptação cardiovascular.</div>
                </div>
                <div className="insight-card">
                  <div className="insight-icon g">✓</div>
                  <div className="insight-text">Maior corrida real: <b>10,3 km</b> em jun/2025 a 6:21/km. Boa base para 10k — o próximo passo é empurrar para 12–15 km nas saídas longas.</div>
                </div>
                <div className="insight-card">
                  <div className="insight-icon o">→</div>
                  <div className="insight-text">GCT de <em>~250 ms</em> é alto. Aumentar cadência para ≥ 170 spm e exercícios de skipping/plyometria reduzem diretamente.</div>
                </div>
                <div className="insight-card">
                  <div className="insight-icon g">↑</div>
                  <div className="insight-text">Retorno em mai–jun/2026 com regularidade crescente. <b>10 km a 5:46/km</b> em 04/06 confirma boa base atual para começar o plano.</div>
                </div>
                <div className="insight-card">
                  <div className="insight-icon b">i</div>
                  <div className="insight-text">Nenhum treino intervalado nos dados — todas as corridas parecem contínuas. Sem estímulos de velocidade, o platô em ~6:00/km persiste.</div>
                </div>
              </div>
            </section>

            <section>
              <div className="section-label">Últimas 20 corridas</div>
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
            </section>
            
            <section>
              <div className="section-label">Plano de treino · 8 semanas para quebrar 5:00/km</div>

              <div className="legend" style={{ marginBottom: '20px' }}>
                <div className="legend-item"><div className="legend-swatch" style={{ background: 'var(--subtle)' }}></div>fácil</div>
                <div className="legend-item"><div className="legend-swatch" style={{ background: 'var(--accent2)' }}></div>tempo</div>
                <div className="legend-item"><div className="legend-swatch" style={{ background: 'var(--accent)' }}></div>intervalado</div>
                <div className="legend-item"><div className="legend-swatch" style={{ background: 'var(--blue)' }}></div>longo</div>
                <div className="legend-item"><div className="legend-swatch" style={{ background: '#eab308' }}></div>prova</div>
              </div>

              <div className="plan-grid">
                {[
                  { id: 'S1', focus: 'Base aeróbica', now: true, sessions: [
                    { day: 'Seg', type: 'easy', name: 'Fácil', detail: '30 min · 6:30/km' },
                    { day: 'Ter', type: 'rest', name: 'Descanso', detail: 'mobilidade' },
                    { day: 'Qua', type: 'easy', name: 'Fácil + Strides', detail: '25 min + 4×100 m aceleração' },
                    { day: 'Qui', type: 'rest', name: 'Descanso', detail: '—' },
                    { day: 'Sáb', type: 'long', name: 'Longo', detail: '6 km · 6:45/km' }
                  ]},
                  { id: 'S2', focus: 'Ativação de ritmo', sessions: [
                    { day: 'Seg', type: 'easy', name: 'Fácil', detail: '30 min · 6:20/km' },
                    { day: 'Ter', type: 'rest', name: 'Descanso', detail: '—' },
                    { day: 'Qua', type: 'tempo', name: 'Tempo curto', detail: '2 km fácil + 2×1 km a 5:40 + 2 km fácil' },
                    { day: 'Qui', type: 'rest', name: 'Descanso', detail: '—' },
                    { day: 'Sáb', type: 'long', name: 'Longo', detail: '7 km · ritmo fácil' }
                  ]},
                  { id: 'S3', focus: 'Intro intervalos', sessions: [
                    { day: 'Seg', type: 'easy', name: 'Fácil', detail: '30 min' },
                    { day: 'Ter', type: 'rest', name: 'Descanso', detail: '—' },
                    { day: 'Qua', type: 'intv', name: 'Tiros 400 m', detail: 'WU + 4×400 m a 4:50 + 2 min rec + CD' },
                    { day: 'Qui', type: 'rest', name: 'Descanso', detail: '—' },
                    { day: 'Sáb', type: 'long', name: 'Longo', detail: '8 km · 6:30/km' }
                  ]},
                  { id: 'S4', focus: 'Consolidação', sessions: [
                    { day: 'Seg', type: 'easy', name: 'Fácil', detail: '30 min' },
                    { day: 'Ter', type: 'rest', name: 'Descanso', detail: '—' },
                    { day: 'Qua', type: 'tempo', name: 'Tempo 3 km', detail: 'WU + 3 km contínuo a 5:30 + CD' },
                    { day: 'Qui', type: 'easy', name: 'Descanso ativo', detail: '20 min fácil ou bike' },
                    { day: 'Sáb', type: 'long', name: 'Longo', detail: '9 km · 6:20/km' }
                  ]},
                  { id: 'S5', focus: 'Carga + velocidade', sessions: [
                    { day: 'Seg', type: 'easy', name: 'Fácil', detail: '35 min' },
                    { day: 'Ter', type: 'rest', name: 'Descanso', detail: '—' },
                    { day: 'Qua', type: 'intv', name: 'Tiros 800 m', detail: 'WU + 4×800 m a 5:10 + 90 s rec + CD' },
                    { day: 'Qui', type: 'easy', name: 'Regenerativo', detail: '20 min a 7:00/km' },
                    { day: 'Sáb', type: 'long', name: 'Longo', detail: '10 km · inclui 3 km a 5:50' }
                  ]},
                  { id: 'S6', focus: 'Pico de intensidade', sessions: [
                    { day: 'Seg', type: 'easy', name: 'Fácil', detail: '30 min' },
                    { day: 'Ter', type: 'rest', name: 'Descanso', detail: '—' },
                    { day: 'Qua', type: 'intv', name: 'Pirâmide', detail: '400+800+1200+800+400 m · 4:50–5:10/km' },
                    { day: 'Qui', type: 'easy', name: 'Fácil', detail: '25 min' },
                    { day: 'Sáb', type: 'tempo', name: 'Tempo 4 km', detail: 'WU + 4 km a 5:20 + CD' }
                  ]},
                  { id: 'S7', focus: 'Afinamento', sessions: [
                    { day: 'Seg', type: 'easy', name: 'Fácil', detail: '25 min · destravar pernas' },
                    { day: 'Ter', type: 'rest', name: 'Descanso', detail: '—' },
                    { day: 'Qua', type: 'intv', name: 'Tiros curtos', detail: '6×400 m a 4:40 · 2 min rec' },
                    { day: 'Qui', type: 'rest', name: 'Descanso', detail: '—' },
                    { day: 'Sáb', type: 'easy', name: 'Fácil + Strides', detail: '20 min + 6×100 m sprint' }
                  ]},
                  { id: 'S8', focus: 'Teste de velocidade', sessions: [
                    { day: 'Seg', type: 'easy', name: 'Fácil', detail: '20 min · pernas descansadas' },
                    { day: 'Ter', type: 'rest', name: 'Descanso', detail: '—' },
                    { day: 'Qua', type: 'easy', name: 'Ativação', detail: '15 min + 4 strides' },
                    { day: 'Qui', type: 'rest', name: 'Descanso', detail: '—' },
                    { day: 'Sáb', type: 'race', name: 'TIME TRIAL 5 km', detail: 'Meta: sub-4:55/km · saia a 5:10 nos primeiros 2 km' }
                  ]}
                ].map((week, i) => (
                  <div key={i} className={`week-col ${week.now ? 'now' : ''}`}>
                    <div className="week-head">{week.id}</div>
                    <div className="week-focus">{week.focus}</div>
                    {week.sessions.map((sesh, j) => (
                      <div key={j} className={`sesh ${sesh.type}`}>
                        <div className="sesh-day">{sesh.day}</div>
                        <div className="sesh-name">{sesh.name}</div>
                        <div className="sesh-detail">{sesh.detail}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <div className="zones-grid">
                <div className="zones-card">
                  <h4>Zonas de pace de treino</h4>
                  <div className="zone-row">
                    <span>Recuperação / Fácil</span>
                    <span className="zone-pace" style={{ color: 'var(--muted)' }}>6:30 – 7:00</span>
                    <span className="zone-desc">80% dos treinos</span>
                  </div>
                  <div className="zone-row">
                    <span>Tempo / Limiar</span>
                    <span className="zone-pace" style={{ color: 'var(--accent2)' }}>5:15 – 5:35</span>
                    <span className="zone-desc">10–15 min contínuos</span>
                  </div>
                  <div className="zone-row">
                    <span>Intervalado / VO2</span>
                    <span className="zone-pace" style={{ color: 'var(--accent)' }}>4:40 – 5:00</span>
                    <span className="zone-desc">400–1200 m repetições</span>
                  </div>
                  <div className="zone-row">
                    <span>Prova 5 km</span>
                    <span className="zone-pace" style={{ color: '#eab308' }}>4:55 – 5:05</span>
                    <span className="zone-desc">meta semana 8</span>
                  </div>
                </div>
                <div className="zones-card">
                  <h4>Dicas baseadas nos seus dados</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div className="insight-card" style={{ padding: '10px 12px' }}>
                      <div className="insight-icon g" style={{ width: '24px', height: '24px', fontSize: '11px', borderRadius: '5px' }}>1</div>
                      <div className="insight-text"><b>Cadência</b> — passada de {avgStride.toFixed(2)} m sugere ~165 spm. Aumente para 170–175 spm com playlist nesse BPM.</div>
                    </div>
                    <div className="insight-card" style={{ padding: '10px 12px' }}>
                      <div className="insight-icon g" style={{ width: '24px', height: '24px', fontSize: '11px', borderRadius: '5px' }}>2</div>
                      <div className="insight-text"><b>Consistência &gt; intensidade</b> — 3 vezes por semana sem gaps vale mais do que treinos duros esporádicos.</div>
                    </div>
                    <div className="insight-card" style={{ padding: '10px 12px' }}>
                      <div className="insight-icon g" style={{ width: '24px', height: '24px', fontSize: '11px', borderRadius: '5px' }}>3</div>
                      <div className="insight-text"><b>GCT {Math.round(avgGCT)} ms</b> — pouse o pé embaixo do quadril, não à frente. Drills de skipping e A-skip corrigem isso.</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'bike' && (
          <div id="tab-bike" className="tab-pane active">
            <section>
              <div className="section-label">Resumo · bike</div>
              <div className="kpi-grid">
                <div className="kpi">
                  <div className="kpi-label">Distância total</div>
                  <div className="kpi-value" style={{ color: 'var(--bike)' }}>{Math.round(BIKES.reduce((acc, b) => acc + b.dist_km, 0))} km</div>
                  <div className="kpi-sub">{BIKES.length} pedaladas</div>
                </div>
                <div className="kpi">
                  <div className="kpi-label">Velocidade média</div>
                  <div className="kpi-value">{(BIKES.reduce((acc, b) => acc + b.speed_kmh, 0) / BIKES.length).toFixed(1)}</div>
                  <div className="kpi-sub">km/h</div>
                </div>
                <div className="kpi">
                  <div className="kpi-label">Maior pedalada</div>
                  <div className="kpi-value" style={{ color: 'var(--accent2)' }}>{Math.max(...BIKES.map(b => b.dist_km)).toFixed(1)} km</div>
                  <div className="kpi-sub">{BIKES.find(b => b.dist_km === Math.max(...BIKES.map(b => b.dist_km)))?.date.split('-').reverse().join('/')}</div>
                </div>
                <div className="kpi">
                  <div className="kpi-label">Tempo total</div>
                  <div className="kpi-value">{(BIKES.reduce((acc, b) => acc + b.duration_min, 0) / 60).toFixed(1)} h</div>
                  <div className="kpi-sub">{Math.round(BIKES.reduce((acc, b) => acc + b.duration_min, 0))} minutos</div>
                </div>
                <div className="kpi">
                  <div className="kpi-label">FC média</div>
                  <div className="kpi-value">{Math.round(BIKES.filter(b => b.hr_avg).reduce((acc, b) => acc + b.hr_avg!, 0) / BIKES.filter(b => b.hr_avg).length)} bpm</div>
                  <div className="kpi-sub">zona 2–3</div>
                </div>
                <div className="kpi">
                  <div className="kpi-label">Fontes</div>
                  <div className="kpi-value" style={{ fontSize: '18px', letterSpacing: 0 }}>Watch + Strava</div>
                  <div className="kpi-sub">dez/2024 → mai/2026</div>
                </div>
              </div>
            </section>

            <section>
              <div className="section-label">Desempenho · bike</div>
              <div className="charts-grid">
                <div className="chart-card full">
                  <div className="chart-label">Velocidade por pedalada · km/h</div>
                  <div className="chart-wrap tall">
                    <Line
                      data={{
                        labels: BIKES.filter(b => b.speed_kmh && b.dist_km >= 1).map(b => b.date.slice(5)),
                        datasets: [{
                          data: BIKES.filter(b => b.speed_kmh && b.dist_km >= 1).map(b => b.speed_kmh),
                          borderColor: 'rgba(59,130,246,0.5)',
                          backgroundColor: 'rgba(59,130,246,0.05)',
                          borderWidth: 1.5,
                          pointRadius: 3,
                          pointBackgroundColor: BIKES.filter(b => b.speed_kmh && b.dist_km >= 1).map(b => b.speed_kmh > 20 ? '#3b82f6' : 'rgba(59,130,246,0.4)'),
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
                                const b = BIKES.filter(b => b.speed_kmh && b.dist_km >= 1)[ctx[0].dataIndex];
                                return b.date + ' · ' + b.dist_km.toFixed(1) + ' km';
                              },
                              label: (ctx: any) => 'Velocidade: ' + ctx.raw.toFixed(1) + ' km/h'
                            }
                          }
                        }
                      }) as any}
                    />
                  </div>
                </div>
                <div className="chart-card">
                  <div className="chart-label">Volume mensal · km</div>
                  <div className="chart-wrap">
                    <Bar
                      data={{
                        labels: (() => {
                          const bm: any = {};
                          BIKES.forEach(b => { const k = b.date.slice(0, 7); bm[k] = (bm[k] || 0) + b.dist_km; });
                          return Object.keys(bm).sort().map(m => { const [y, mo] = m.split('-'); return mNames[parseInt(mo) - 1] + "'" + y.slice(2); });
                        })(),
                        datasets: [{
                          data: (() => {
                            const bm: any = {};
                            BIKES.forEach(b => { const k = b.date.slice(0, 7); bm[k] = (bm[k] || 0) + b.dist_km; });
                            return Object.keys(bm).sort().map(m => parseFloat(bm[m].toFixed(1)));
                          })(),
                          backgroundColor: (() => {
                            const bm: any = {};
                            BIKES.forEach(b => { const k = b.date.slice(0, 7); bm[k] = (bm[k] || 0) + b.dist_km; });
                            return Object.keys(bm).sort().map(m => bm[m] > 30 ? 'rgba(59,130,246,0.6)' : 'rgba(59,130,246,0.25)');
                          })(),
                          borderColor: 'rgba(59,130,246,0.5)', borderWidth: 1, borderRadius: 3,
                        }]
                      }}
                      options={chartOptions({
                        scales: { y: { ticks: { callback: (v: any) => v + 'km' } } }
                      }) as any}
                    />
                  </div>
                </div>
                <div className="chart-card">
                  <div className="chart-label">Distribuição de distâncias</div>
                  <div className="chart-wrap">
                    <Bar
                      data={{
                        labels: ['<2km', '2–5km', '5–8km', '8–12km', '>12km'],
                        datasets: [{
                          data: (() => {
                            const bd = { '<2km': 0, '2–5km': 0, '5–8km': 0, '8–12km': 0, '>12km': 0 };
                            BIKES.forEach(b => {
                              if (b.dist_km < 2) bd['<2km']++;
                              else if (b.dist_km < 5) bd['2–5km']++;
                              else if (b.dist_km < 8) bd['5–8km']++;
                              else if (b.dist_km < 12) bd['8–12km']++;
                              else bd['>12km']++;
                            });
                            return Object.values(bd);
                          })(),
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
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="section-label">Todas as pedaladas · {BIKES.length} atividades</div>
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
            </section>
          </div>
        )}

        {activeTab === 'glossary' && (
          <div id="tab-glossary" className="tab-pane active">
            <section>
              <div className="section-label">Glossário · todos os termos usados neste dashboard</div>
              <div id="glossaryGrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {GLOSSARY.map((g, i) => (
                  <div key={i} className="insight-card" style={{ flexDirection: 'column', gap: '10px', alignItems: 'stretch' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '20px' }}>{g.emoji}</span>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '14px' }}>{g.term}</div>
                        <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{g.unit}</div>
                      </div>
                    </div>
                    <div style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text)' }}>{g.def}</div>
                    <div style={{ fontSize: '11px', color: 'var(--muted)', background: 'var(--bg)', padding: '8px 10px', borderRadius: '6px', borderLeft: '2px solid var(--border)' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 500 }}>Nos seus dados:</span> {g.example}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
