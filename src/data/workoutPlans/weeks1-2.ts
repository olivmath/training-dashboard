import type { Workout } from './types';

export const WEEKS_1_2: Record<string, Workout> = {
  's1-seg': {
    name: 'Fácil', type: 'easy', week: 1, day: 'Segunda',
    note: 'Trote leve para ativar sem cansar. Converse enquanto corre — se não consegue falar frases completas, está rápido demais.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',    metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Corrida fácil',  metric: '20 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min',  zone: 1 },
    ],
  },
  's1-ter': {
    name: 'Descanso', type: 'rest', week: 1, day: 'Terça',
    note: 'Recuperação ativa. Mobilidade, alongamento ou caminhada leve de 15–20 min.',
    steps: [
      { kind: 'rest', label: 'Mobilidade / Alongamento', metric: '15–20 min', zone: null },
    ],
  },
  's1-qua': {
    name: 'Fácil + Strides', type: 'easy', week: 1, day: 'Quarta',
    note: 'Trote base + acelerações curtas para estímulo neuromuscular. O trote deve ser fácil — os strides é que acordam as pernas.',
    steps: [
      { kind: 'warmup', label: 'Aquecimento',    metric: '5 min',  zone: 1 },
      { kind: 'steady', label: 'Corrida fácil',  metric: '20 min', zone: 2 },
      { kind: 'repeat', reps: 4, steps: [
        { kind: 'stride',   label: 'Stride',     metric: '100 m', zone: 5 },
        { kind: 'recovery', label: 'Trote leve', metric: '1 min', zone: 1 },
      ]},
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min', zone: 1 },
    ],
  },
  's1-qui': {
    name: 'Descanso', type: 'rest', week: 1, day: 'Quinta',
    note: 'Descanso completo. Deixe o corpo absorver o estímulo da semana.',
    steps: [
      { kind: 'rest', label: 'Descanso', metric: '—', zone: null },
    ],
  },
  's1-sab': {
    name: 'Longo', type: 'long', week: 1, day: 'Sábado',
    note: 'Primeira corrida longa do plano. Pace conversacional 6:45/km — não acelere mesmo que pareça fácil.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '1 km', zone: 1 },
      { kind: 'steady',   label: 'Corrida base',  metric: '4 km', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '1 km', zone: 1 },
    ],
  },
  's2-seg': {
    name: 'Fácil', type: 'easy', week: 2, day: 'Segunda',
    note: 'Trote de recuperação pós-longo. Mantenha acima de 6:20/km.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Corrida fácil', metric: '20 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min', zone: 1 },
    ],
  },
  's2-ter': {
    name: 'Descanso', type: 'rest', week: 2, day: 'Terça',
    note: 'Descanso completo.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  's2-qua': {
    name: 'Tempo Curto', type: 'tempo', week: 2, day: 'Quarta',
    note: 'Primeiro treino de limiar. 5:40/km deve ser desconfortável mas controlável por 1 km. Não saia rápido demais no primeiro.',
    steps: [
      { kind: 'warmup', label: 'Aquecimento', metric: '2 km', zone: 2 },
      { kind: 'repeat', reps: 2, steps: [
        { kind: 'tempo',    label: 'Tempo',       metric: '1 km · 5:40/km', zone: 4 },
        { kind: 'recovery', label: 'Recuperação', metric: '2 min',          zone: 1 },
      ]},
      { kind: 'cooldown', label: 'Desaquecimento', metric: '2 km', zone: 2 },
    ],
  },
  's2-qui': {
    name: 'Descanso', type: 'rest', week: 2, day: 'Quinta',
    note: 'Descanso completo.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  's2-sab': {
    name: 'Longo', type: 'long', week: 2, day: 'Sábado',
    note: 'Volume crescente. Ritmo fácil o tempo todo — 7 km devem parecer confortáveis.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '1 km', zone: 1 },
      { kind: 'steady',   label: 'Corrida base',  metric: '5 km', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '1 km', zone: 1 },
    ],
  },
};
