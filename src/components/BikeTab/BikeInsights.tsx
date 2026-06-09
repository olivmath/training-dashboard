import React from 'react';
import InsightCard from '../common/InsightCard';
import { useBikeData } from '../../hooks/useBikeData';
import { BIKES } from '../../data/dashboardData';

const BikeInsights: React.FC = () => {
  const { avgSpeedBike, avgHRBike } = useBikeData();
  const maxSpeed = Math.max(...BIKES.map(b => b.speed_kmh));
  const maxSpeedBike = BIKES.find(b => b.speed_kmh === maxSpeed);

  return (
    <div className="insights-grid">
      <InsightCard
        icon="↑"
        iconClass="g"
        text={<>Melhor velocidade: <b>{maxSpeed.toFixed(1)} km/h</b> em {maxSpeedBike?.date.split('-').reverse().join('/')}. Velocidade média geral de {avgSpeedBike.toFixed(1)} km/h — gap de <b>~{(maxSpeed - avgSpeedBike).toFixed(1)} km/h</b> entre pico e média mostra potencial ainda não regularizado.</>}
      />
      <InsightCard
        icon="!"
        iconClass="o"
        text={<>Maioria das pedaladas é <em>curta</em> — {BIKES.filter(b=>b.dist_km<8).length} de {BIKES.length} rides abaixo de 8 km. Para ganho aeróbico real, o livro recomenda sessões ≥ 45 min contínuos. Rides curtos demais não atingem a janela de queima de gordura.</>}
      />
      <InsightCard
        icon="✓"
        iconClass="g"
        text={<>Maior pedalada: <b>{Math.max(...BIKES.map(b=>b.dist_km)).toFixed(1)} km</b> em {BIKES.find(b=>b.dist_km===Math.max(...BIKES.map(b=>b.dist_km)))?.date.split('-').reverse().join('/')}. Essa distância confirma base para começar o plano de 8 semanas — o longo de S3 (~12 km) está ao alcance.</>}
      />
      <InsightCard
        icon="i"
        iconClass="b"
        text={<>Apple Watch não registra <b>cadência de pedal</b> (rpm). Sem esse dado, é impossível saber se você pedala em 70 rpm (força excessiva) ou 90 rpm (eficiência). Considere um sensor de cadência Bluetooth (~R$80) — o maior retorno por custo no ciclismo.</>}
      />
      <InsightCard
        icon="→"
        iconClass="o"
        text={<>Nenhuma sessão de <em>intervalo</em> nos dados — todas as pedaladas parecem ser de ritmo constante. Sem estímulo Z4, o teto de velocidade não sobe. Os Intervalos Z4 do plano (S5–S6) são o principal gatilho de melhora de performance.</>}
      />
      <InsightCard
        icon="↑"
        iconClass="g"
        text={<>FC média de <b>{Math.round(avgHRBike)} bpm</b> nas pedaladas — zona aeróbica adequada. Boa base cardiovascular para suportar o aumento de volume do plano sem overreaching.</>}
      />
    </div>
  );
};

export default BikeInsights;
