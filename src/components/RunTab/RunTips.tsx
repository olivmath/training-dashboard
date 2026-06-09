import React from 'react';
import InsightCard from '../common/InsightCard';
import { useRunData } from '../../hooks/useRunData';

const RunTips: React.FC = () => {
  const { avgStride, avgGCT } = useRunData();

  return (
    <div className="zones-card">
      <h4>Dicas baseadas nos seus dados</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <InsightCard
          icon="1"
          iconClass="g"
          iconStyle={{ width: '24px', height: '24px', fontSize: '11px', borderRadius: '5px' }}
          style={{ padding: '10px 12px' }}
          text={<><b>Cadência</b> — passada de {avgStride.toFixed(2)} m sugere ~165 spm. Aumente para 170–175 spm com playlist nesse BPM.</>}
        />
        <InsightCard
          icon="2"
          iconClass="g"
          iconStyle={{ width: '24px', height: '24px', fontSize: '11px', borderRadius: '5px' }}
          style={{ padding: '10px 12px' }}
          text={<><b>Consistência &gt; intensidade</b> — 3 vezes por semana sem gaps vale mais do que treinos duros esporádicos.</>}
        />
        <InsightCard
          icon="3"
          iconClass="g"
          iconStyle={{ width: '24px', height: '24px', fontSize: '11px', borderRadius: '5px' }}
          style={{ padding: '10px 12px' }}
          text={<><b>GCT {Math.round(avgGCT)} ms</b> — pouse o pé embaixo do quadril, não à frente. Drills de skipping e A-skip corrigem isso.</>}
        />
      </div>
    </div>
  );
};

export default RunTips;
