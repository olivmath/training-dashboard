import React from 'react';
import { GLOSSARY } from '../data/dashboardData';

const GlossaryTab: React.FC = () => {
  return (
    <div id="tab-glossary" className="tab-pane active">
      <section>
        <div className="section-label">Glossário · termos técnicos</div>
        <div className="glossary-grid">
          {GLOSSARY.map((g, i) => (
            <div key={i} className="glossary-card">
              <div className="glossary-head">
                <span className="glossary-emoji">{g.emoji}</span>
                <div className="glossary-title">
                  <div className="glossary-term">{g.term}</div>
                  <div className="glossary-unit">{g.unit}</div>
                </div>
              </div>
              <div className="glossary-def">{g.def}</div>
              <div className="glossary-example">
                <span className="label">Nos seus dados:</span> {g.example}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GlossaryTab;
