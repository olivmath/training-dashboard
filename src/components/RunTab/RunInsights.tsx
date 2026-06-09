import React from 'react';
import InsightCard from '../common/InsightCard';
import { useRunData } from '../../hooks/useRunData';

const RunInsights: React.FC = () => {
  const { avgGCT } = useRunData();

  return (
    <div className="insights-grid">
      <InsightCard
        icon="↑"
        iconClass="g"
        text={<>Pico de <b>5:01/km</b> em agosto 2025. Em jul–ago fez <em>8 corridas em ~4 semanas</em> — maior consistência do período e melhor resultado.</>}
      />
      <InsightCard
        icon="!"
        iconClass="o"
        text={<>Dois gaps longos: <em>6 semanas</em> (set→out/2025) e <em>7 semanas</em> (nov/2025→jan/2026). Cada pausa custa semanas de adaptação cardiovascular.</>}
      />
      <InsightCard
        icon="✓"
        iconClass="g"
        text={<>Maior corrida real: <b>10,3 km</b> em jun/2025 a 6:21/km. Boa base para 10k — o próximo passo é empurrar para 12–15 km nas saídas longas.</>}
      />
      <InsightCard
        icon="→"
        iconClass="o"
        text={<>GCT de <em>~{Math.round(avgGCT)} ms</em> é alto. Aumentar cadência para ≥ 170 spm e exercícios de skipping/plyometria reduzem diretamente.</>}
      />
      <InsightCard
        icon="↑"
        iconClass="g"
        text={<>Retorno em mai–jun/2026 com regularidade crescente. <b>10 km a 5:46/km</b> em 04/06 confirma boa base atual para começar o plano.</>}
      />
      <InsightCard
        icon="i"
        iconClass="b"
        text={<>Nenhum treino intervalado nos dados — todas as corridas parecem contínuas. Sem estímulos de velocidade, o platô em ~6:00/km persiste.</>}
      />
    </div>
  );
};

export default RunInsights;
