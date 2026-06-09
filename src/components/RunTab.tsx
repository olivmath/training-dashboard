import React from 'react';
import { TrainingPlan } from './TrainingPlan';
import RunKPIs from './RunTab/RunKPIs';
import RunCharts from './RunTab/RunCharts';
import RunBio from './RunTab/RunBio';
import RunInsights from './RunTab/RunInsights';
import RunTips from './RunTab/RunTips';
import RunTable from './RunTab/RunTable';

const RunTab: React.FC = () => {
  return (
    <div id="tab-run" className="tab-pane active">
      <section>
        <div className="section-label">Resumo geral</div>
        <RunKPIs />
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
        <TrainingPlan />
        <div className="zones-grid">
          <div className="zones-card">
            <h4>Zonas de pace de treino</h4>
            <div className="zones-table">
              <div className="zone-row">
                <span className="zone-label">Recuperação / Fácil</span>
                <span className="zone-pace">6:30 – 7:00</span>
                <span className="zone-desc">80% dos treinos</span>
              </div>
              <div className="zone-row">
                <span className="zone-label">Tempo / Limiar</span>
                <span className="zone-pace">5:15 – 5:35</span>
                <span className="zone-desc">10–15 min contínuos</span>
              </div>
              <div className="zone-row">
                <span className="zone-label">Intervalado / VO2</span>
                <span className="zone-pace">4:40 – 5:00</span>
                <span className="zone-desc">400–1200 m repetições</span>
              </div>
              <div className="zone-row">
                <span className="zone-label">Prova 5 km</span>
                <span className="zone-pace" style={{ color: '#eab308' }}>4:55 – 5:05</span>
                <span className="zone-desc">meta semana 8</span>
              </div>
            </div>
          </div>
          <RunTips />
        </div>
      </section>

      <section>
        <div className="section-label">Desempenho ao longo do tempo</div>
        <RunCharts />
      </section>

      <section>
        <div className="section-label">Biomecânica · Apple Watch (média das corridas com sensores)</div>
        <RunBio />
      </section>

      <section>
        <div className="section-label">Insights</div>
        <RunInsights />
      </section>

      <section>
        <div className="section-label">Últimas 20 corridas</div>
        <RunTable />
      </section>
    </div>
  );
};

export default RunTab;
