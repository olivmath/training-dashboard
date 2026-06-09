import type { Workout } from '../workoutPlans/types';

export const BIKE_WEEKS_1_2: Record<string, Workout> = {
  'b1-seg': {
    name: 'Pedalada Leve', type: 'easy', week: 1, day: 'Segunda',
    note: 'Pedalada leve para ativar sem cansar. Cadência confortável ~80–85 rpm. Se você sente as pernas trabalhando muito, está pesado demais.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',       metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Pedalada Z2',        metric: '20 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento',     metric: '5 min',  zone: 1 },
    ],
  },
  'b1-ter': {
    name: 'Descanso', type: 'rest', week: 1, day: 'Terça',
    note: 'Recuperação ativa. Mobilidade de quadril, alongamento de panturrilha e glúteo.',
    steps: [
      { kind: 'rest', label: 'Mobilidade / Descanso', metric: '—', zone: null },
    ],
  },
  'b1-qua': {
    name: 'Leve + Cadência', type: 'easy', week: 1, day: 'Quarta',
    note: 'Pedalada base com blocos de cadência alta. O objetivo é treinar o sistema nervoso a girar rápido sem força excessiva — "giro leve".',
    steps: [
      { kind: 'warmup', label: 'Aquecimento',       metric: '5 min',  zone: 1 },
      { kind: 'steady', label: 'Pedalada Z2',        metric: '20 min', zone: 2 },
      { kind: 'repeat', reps: 5, steps: [
        { kind: 'work',     label: 'Cadência alta (90+ rpm)', metric: '30 s', zone: 2 },
        { kind: 'recovery', label: 'Cadência normal',         metric: '90 s', zone: 1 },
      ]},
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min', zone: 1 },
    ],
  },
  'b1-qui': {
    name: 'Descanso', type: 'rest', week: 1, day: 'Quinta',
    note: 'Descanso completo ou caminhada leve.',
    steps: [
      { kind: 'rest', label: 'Descanso', metric: '—', zone: null },
    ],
  },
  'b1-sab': {
    name: 'Longo', type: 'long', week: 1, day: 'Sábado',
    note: 'Primeira pedalada longa do plano. Pace conversacional em Z2 — não importa a velocidade, importa manter o esforço baixo por mais tempo.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Pedalada Z2',    metric: '35 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min',  zone: 1 },
    ],
  },
  'b2-seg': {
    name: 'Pedalada Leve', type: 'easy', week: 2, day: 'Segunda',
    note: 'Recuperação ativa pós-longo. Não force — a adaptação acontece no descanso.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Pedalada Z2',    metric: '25 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min',  zone: 1 },
    ],
  },
  'b2-ter': {
    name: 'Descanso', type: 'rest', week: 2, day: 'Terça',
    note: 'Descanso completo.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  'b2-qua': {
    name: 'Tempo Curto', type: 'tempo', week: 2, day: 'Quarta',
    note: 'Primeiro estímulo de ritmo sustentado. Z3 é desconfortável mas controlável.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',      metric: '10 min', zone: 1 },
      { kind: 'tempo',    label: 'Ritmo sustentado',  metric: '15 min', zone: 3 },
      { kind: 'cooldown', label: 'Desaquecimento',    metric: '10 min', zone: 1 },
    ],
  },
  'b2-qui': {
    name: 'Descanso', type: 'rest', week: 2, day: 'Quinta',
    note: 'Descanso.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  'b2-sab': {
    name: 'Longo', type: 'long', week: 2, day: 'Sábado',
    note: 'Longo com +5 min vs semana 1. Mantenha Z2.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Pedalada Z2',    metric: '40 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min',  zone: 1 },
    ],
  },
};
