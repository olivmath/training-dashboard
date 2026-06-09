import React from 'react';
import BioCard from '../common/BioCard';
import { useRunData } from '../../hooks/useRunData';

const RunBio: React.FC = () => {
  const { avgStride, avgPower, avgGCT, avgVertOsc } = useRunData();

  return (
    <div className="bio-grid">
      <BioCard
        label="Comprimento de passada"
        value={avgStride.toFixed(2)}
        unit="metros por passada"
        fillWidth={`${(avgStride / 1.4) * 100}%`}
        fillColor="var(--accent)"
        hint="Bom · objetivo ≥ 1,10 m"
      />
      <BioCard
        label="Potência de corrida"
        value={Math.round(avgPower)}
        unit="watts (média)"
        fillWidth={`${(avgPower / 300) * 100}%`}
        fillColor="var(--accent2)"
        hint="Moderado · elite > 250 W"
      />
      <BioCard
        label="Tempo de contato solo"
        value={Math.round(avgGCT)}
        unit="milissegundos"
        fillWidth={`${(230 / avgGCT) * 100}%`}
        fillColor="var(--accent2)"
        hint="Alto · objetivo < 230 ms"
      />
      <BioCard
        label="Oscilação vertical"
        value={avgVertOsc.toFixed(1)}
        unit="centímetros"
        fillWidth={`${(10 / avgVertOsc) * 100}%`}
        fillColor="var(--accent)"
        hint="Ótimo · ideal entre 6–10 cm"
      />
    </div>
  );
};

export default RunBio;
