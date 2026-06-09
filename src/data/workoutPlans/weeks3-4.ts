import type { Workout } from './types';

export const WEEKS_3_4: Record<string, Workout> = {
  's3-seg': {
    name: 'Fácil', type: 'easy', week: 3, day: 'Segunda',
    note: 'Trote leve. Mantenha 6:30/km.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Corrida fácil', metric: '20 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min', zone: 1 },
    ],
  },
  's3-ter': {
    name: 'Descanso', type: 'rest', week: 3, day: 'Terça',
    note: 'Descanso completo.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  's3-qua': {
    name: 'Tiros 400 m', type: 'intv', week: 3, day: 'Quarta',
    note: 'Introdução aos intervalos. Saia controlado no primeiro tiro — 4:50/km vai parecer muito rápido, e é. Foque em manter o ritmo nos 4 tiros.',
    steps: [
      { kind: 'warmup', label: 'Aquecimento', metric: '1.5 km', zone: 2 },
      { kind: 'repeat', reps: 4, steps: [
        { kind: 'work',     label: 'Tiro',        metric: '400 m · 4:50/km', zone: 5 },
        { kind: 'recovery', label: 'Recuperação', metric: '2 min',           zone: 1 },
      ]},
      { kind: 'cooldown', label: 'Desaquecimento', metric: '1 km', zone: 1 },
    ],
  },
  's3-qui': {
    name: 'Descanso', type: 'rest', week: 3, day: 'Quinta',
    note: 'Descanso completo.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  's3-sab': {
    name: 'Longo', type: 'long', week: 3, day: 'Sábado',
    note: '8 km a 6:30/km. A distância começa a exigir — hidratação antes e depois.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '1 km', zone: 1 },
      { kind: 'steady',   label: 'Corrida base',  metric: '6 km', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '1 km', zone: 1 },
    ],
  },
  's4-seg': {
    name: 'Fácil', type: 'easy', week: 4, day: 'Segunda',
    note: 'Recuperação leve. Semana 4 é de consolidação.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Corrida fácil', metric: '20 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min', zone: 1 },
    ],
  },
  's4-ter': {
    name: 'Descanso', type: 'rest', week: 4, day: 'Terça',
    note: 'Descanso completo.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  's4-qua': {
    name: 'Tempo 3 km', type: 'tempo', week: 4, day: 'Quarta',
    note: '3 km contínuos de limiar. 5:30/km é difícil de sustentar por mais de 3 km — esse é o ponto. Não acelere no final.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',      metric: '1.5 km',        zone: 2 },
      { kind: 'tempo',    label: 'Tempo contínuo',   metric: '3 km · 5:30/km', zone: 4 },
      { kind: 'cooldown', label: 'Desaquecimento',   metric: '1 km',           zone: 1 },
    ],
  },
  's4-qui': {
    name: 'Descanso Ativo', type: 'easy', week: 4, day: 'Quinta',
    note: 'Movimento leve sem impacto. Bike ou caminhada — nada que canse as pernas para o longo de sábado.',
    steps: [
      { kind: 'steady', label: 'Bike ou corrida fácil', metric: '20 min', zone: 2 },
    ],
  },
  's4-sab': {
    name: 'Longo', type: 'long', week: 4, day: 'Sábado',
    note: '9 km a 6:20/km. Ainda pace fácil — semana 4 fecha a primeira fase do plano.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '1 km', zone: 1 },
      { kind: 'steady',   label: 'Corrida base',  metric: '7 km', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '1 km', zone: 1 },
    ],
  },
};
