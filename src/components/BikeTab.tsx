import React from 'react';
import { BikePlan } from './BikePlan';
import BikeKPIs from './BikeTab/BikeKPIs';
import BikeCharts from './BikeTab/BikeCharts';
import BikeInsights from './BikeTab/BikeInsights';
import BikeTable from './BikeTab/BikeTable';
import { BIKES } from '../data/dashboardData';

const BikeTab: React.FC = () => {
  return (
    <div id="tab-bike" className="tab-pane active">
      <section>
        <div className="section-label">Resumo · bike</div>
        <BikeKPIs />
      </section>

      <section>
        <div className="section-label">Plano de treino · bike · 8 semanas para ≥ 22 km/h</div>
        <div className="legend" style={{ marginBottom: '20px' }}>
          <div className="legend-item"><div className="legend-swatch" style={{ background: 'var(--subtle)' }}></div>fácil</div>
          <div className="legend-item"><div className="legend-swatch" style={{ background: 'var(--accent2)' }}></div>tempo</div>
          <div className="legend-item"><div className="legend-swatch" style={{ background: 'var(--accent)' }}></div>intervalado</div>
          <div className="legend-item"><div className="legend-swatch" style={{ background: 'var(--blue)' }}></div>longo</div>
          <div className="legend-item"><div className="legend-swatch" style={{ background: '#eab308' }}></div>prova</div>
        </div>
        <BikePlan />
      </section>

      <section>
        <div className="section-label">Desempenho · bike</div>
        <BikeCharts />
      </section>

      <section>
        <div className="section-label">Insights · bike</div>
        <BikeInsights />
      </section>

      <section>
        <div className="section-label">Todas as pedaladas · {BIKES.length} atividades</div>
        <BikeTable />
      </section>
    </div>
  );
};

export default BikeTab;
