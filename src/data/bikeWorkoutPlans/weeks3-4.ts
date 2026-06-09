import type { Workout } from '../workoutPlans/types';

export const BIKE_WEEKS_3_4: Record<string, Workout> = {
  'b3-seg': {
    name: 'Pedalada Leve', type: 'easy', week: 3, day: 'Terça',
    note: 'Trote de recuperação em Z2.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Pedalada Z2',   metric: '25 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min',  zone: 1 },
    ],
  },
  'b3-ter': {
    name: 'Descanso', type: 'rest', week: 3, day: 'Quarta',
    note: 'Descanso.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  'b3-qua': {
    name: 'Subidas', type: 'intv', week: 3, day: 'Quinta',
    note: 'Intervalos em subida ou marcha pesada simulando subida. Esforço Z4.',
    steps: [
      { kind: 'warmup', label: 'Aquecimento', metric: '10 min', zone: 1 },
      { kind: 'repeat', reps: 5, steps: [
        { kind: 'work',     label: 'Subida / esforço Z4', metric: '2 min', zone: 4 },
        { kind: 'recovery', label: 'Recuperação leve',    metric: '2 min', zone: 1 },
      ]},
      { kind: 'cooldown', label: 'Desaquecimento', metric: '10 min', zone: 1 },
    ],
  },
  'b3-sab': {
    name: 'Longo', type: 'long', week: 3, day: 'Domingo',
    note: 'Longo com volume crescente. Mantenha Z2.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Pedalada Z2',   metric: '45 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min',  zone: 1 },
    ],
  },
  'b4-seg': {
    name: 'Regenerativo', type: 'easy', week: 4, day: 'Terça',
    note: 'Semana de deload — volume reduzido deliberadamente.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Pedalada Z1',   metric: '20 min', zone: 1 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min',  zone: 1 },
    ],
  },
  'b4-ter': {
    name: 'Descanso', type: 'rest', week: 4, day: 'Quarta',
    note: 'Descanso.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  'b4-qua': {
    name: 'Cadência', type: 'easy', week: 4, day: 'Quinta',
    note: 'Foco total em cadência. Objetivo: manter 88–92 rpm.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',          metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Z2 cadência ≥ 88 rpm', metric: '25 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento',        metric: '5 min',  zone: 1 },
    ],
  },
  'b4-sab': {
    name: 'Longo Curto', type: 'long', week: 4, day: 'Domingo',
    note: 'Longo mais curto do que semana 3 — faz parte do deload.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Pedalada Z2',   metric: '35 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min',  zone: 1 },
    ],
  },
};
