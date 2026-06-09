import { Workout } from '../workoutPlans/types';

export const BIKE_WEEKS_7_8: Record<string, Workout> = {
  'b7-seg': {
    name: 'Pedalada Leve', type: 'easy', week: 7, day: 'Segunda',
    note: 'Semana de afinamento — volume cai, qualidade permanece.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Pedalada Z2',    metric: '20 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min',  zone: 1 },
    ],
  },
  'b7-ter': {
    name: 'Descanso', type: 'rest', week: 7, day: 'Terça',
    note: 'Descanso.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  'b7-qua': {
    name: 'Tiros Curtos', type: 'intv', week: 7, day: 'Quarta',
    note: 'Tiros curtos de alta intensidade para manter os neuromotores afiados.',
    steps: [
      { kind: 'warmup', label: 'Aquecimento', metric: '10 min', zone: 1 },
      { kind: 'repeat', reps: 6, steps: [
        { kind: 'work',     label: 'Sprint Z5',   metric: '1 min', zone: 5 },
        { kind: 'recovery', label: 'Recuperação', metric: '2 min', zone: 1 },
      ]},
      { kind: 'cooldown', label: 'Desaquecimento', metric: '10 min', zone: 1 },
    ],
  },
  'b7-qui': {
    name: 'Descanso', type: 'rest', week: 7, day: 'Quinta',
    note: 'Descanso.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  'b7-sab': {
    name: 'Leve + Sprints', type: 'easy', week: 7, day: 'Sábado',
    note: 'Pedalada leve com sprints finais para ativar as fibras rápidas.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Pedalada Z2',    metric: '20 min', zone: 2 },
      { kind: 'repeat', reps: 3, steps: [
        { kind: 'stride',   label: 'Sprint curto', metric: '15 s', zone: 5 },
        { kind: 'recovery', label: 'Pausa',         metric: '2 min', zone: 1 },
      ]},
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min', zone: 1 },
    ],
  },
  'b8-seg': {
    name: 'Pedalada Leve', type: 'easy', week: 8, day: 'Segunda',
    note: 'Pernas descansadas. Pedalada muito leve.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Pedalada Z1',    metric: '15 min', zone: 1 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min',  zone: 1 },
    ],
  },
  'b8-ter': {
    name: 'Descanso', type: 'rest', week: 8, day: 'Terça',
    note: 'Descanso total.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  'b8-qua': {
    name: 'Ativação', type: 'easy', week: 8, day: 'Quarta',
    note: 'Ativação leve com 3 sprints curtos.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '10 min', zone: 1 },
      { kind: 'steady',   label: 'Pedalada Z2',    metric: '10 min', zone: 2 },
      { kind: 'repeat', reps: 3, steps: [
        { kind: 'stride',   label: 'Sprint ativação', metric: '20 s', zone: 5 },
        { kind: 'recovery', label: 'Pausa',            metric: '2 min', zone: 1 },
      ]},
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min', zone: 1 },
    ],
  },
  'b8-qui': {
    name: 'Descanso', type: 'rest', week: 8, day: 'Quinta',
    note: 'Descanso. Hidrate bem e durma.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  'b8-sab': {
    name: 'TIME TRIAL 10 km', type: 'race', week: 8, day: 'Sábado',
    note: 'Meta: velocidade média ≥ 22 km/h em terreno plano.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',      metric: '10 min', zone: 1 },
      { kind: 'work',     label: 'TIME TRIAL 10 km',  metric: '10 km',  zone: 4 },
      { kind: 'cooldown', label: 'Desaquecimento',    metric: '10 min', zone: 1 },
    ],
  },
};
