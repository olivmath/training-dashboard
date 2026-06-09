import React from 'react';
import { GLOSSARY } from '../data/dashboardData';

const GlossaryTab: React.FC = () => {
  return (
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
  );
};

export default GlossaryTab;
