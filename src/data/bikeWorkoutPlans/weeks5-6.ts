import type { Workout } from '../workoutPlans/types';

export const BIKE_WEEKS_5_6: Record<string, Workout> = {
  'b5-seg': {
    name: 'Pedalada Leve', type: 'easy', week: 5, day: 'Terça',
    note: 'Volta ao volume. Semana 5 marca o início da fase de intensidade.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Pedalada Z2',   metric: '30 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min',  zone: 1 },
    ],
  },
  'b5-ter': {
    name: 'Descanso', type: 'rest', week: 5, day: 'Quarta',
    note: 'Descanso.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  'b5-qua': {
    name: 'Intervalos Z4', type: 'intv', week: 5, day: 'Quinta',
    note: 'Intervalos de 4 min em Z4. A recuperação de 3 min é essencial.',
    steps: [
      { kind: 'warmup', label: 'Aquecimento', metric: '10 min', zone: 1 },
      { kind: 'repeat', reps: 4, steps: [
        { kind: 'work',     label: 'Intervalo Z4', metric: '4 min', zone: 4 },
        { kind: 'recovery', label: 'Recuperação',  metric: '3 min', zone: 1 },
      ]},
      { kind: 'cooldown', label: 'Desaquecimento', metric: '10 min', zone: 1 },
    ],
  },
  'b5-sab': {
    name: 'Longo + Z3', type: 'long', week: 5, day: 'Domingo',
    note: 'Longo com bloco de ritmo.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Pedalada Z2',   metric: '20 min', zone: 2 },
      { kind: 'tempo',    label: 'Bloco Z3',      metric: '15 min', zone: 3 },
      { kind: 'steady',   label: 'Volta Z2',      metric: '15 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min',  zone: 1 },
    ],
  },
  'b6-seg': {
    name: 'Pedalada Leve', type: 'easy', week: 6, day: 'Terça',
    note: 'Z2 tranquilo antes da sessão de pico na quinta.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Pedalada Z2',   metric: '25 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min',  zone: 1 },
    ],
  },
  'b6-ter': {
    name: 'Descanso', type: 'rest', week: 6, day: 'Quarta',
    note: 'Descanso.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  'b6-qua': {
    name: 'Pirâmide', type: 'intv', week: 6, day: 'Quinta',
    note: 'Pirâmide de intervalos — volume acumulado alto em Z4.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',    metric: '10 min', zone: 1 },
      { kind: 'work',     label: '2 min Z4',       metric: '2 min',  zone: 4 },
      { kind: 'recovery', label: 'Recuperação',    metric: '2 min',  zone: 1 },
      { kind: 'work',     label: '4 min Z4',       metric: '4 min',  zone: 4 },
      { kind: 'recovery', label: 'Recuperação',    metric: '2 min',  zone: 1 },
      { kind: 'work',     label: '6 min Z4 (pico)', metric: '6 min', zone: 4 },
      { kind: 'recovery', label: 'Recuperação',    metric: '3 min',  zone: 1 },
      { kind: 'work',     label: '4 min Z4',       metric: '4 min',  zone: 4 },
      { kind: 'recovery', label: 'Recuperação',    metric: '2 min',  zone: 1 },
      { kind: 'work',     label: '2 min Z4',       metric: '2 min',  zone: 4 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '10 min', zone: 1 },
    ],
  },
  'b6-sab': {
    name: 'Tempo 20 min', type: 'tempo', week: 6, day: 'Domingo',
    note: 'Bloco de 20 min em Z3 — o maior esforço contínuo do plano.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',     metric: '10 min', zone: 1 },
      { kind: 'tempo',    label: 'Tempo sustentado', metric: '20 min', zone: 3 },
      { kind: 'cooldown', label: 'Desaquecimento',   metric: '10 min', zone: 1 },
    ],
  },
};
