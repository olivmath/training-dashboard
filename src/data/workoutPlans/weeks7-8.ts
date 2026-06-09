import type { Workout } from './types';

export const WEEKS_7_8: Record<string, Workout> = {
  's7-seg': {
    name: 'Tiros Curtos', type: 'intv', week: 7, day: 'Segunda',
    note: '6×400 m a 4:40/km — o pace mais rápido do plano. Só dê o 6º tiro se o 5º ainda estiver no ritmo. Qualidade > quantidade.',
    steps: [
      { kind: 'warmup', label: 'Aquecimento', metric: '1.5 km', zone: 2 },
      { kind: 'repeat', reps: 6, steps: [
        { kind: 'work',     label: 'Tiro',        metric: '400 m · 4:40/km', zone: 5 },
        { kind: 'recovery', label: 'Recuperação', metric: '2 min',           zone: 1 },
      ]},
      { kind: 'cooldown', label: 'Desaquecimento', metric: '1 km', zone: 1 },
    ],
  },
  's7-ter': {
    name: 'Descanso', type: 'rest', week: 7, day: 'Terça',
    note: 'Descanso completo.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  's7-qua': {
    name: 'Fácil', type: 'easy', week: 7, day: 'Sexta',
    note: 'Semana de afinamento — menos volume, mesma qualidade. Deixa o corpo absorver as 6 semanas anteriores.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',    metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Corrida fácil',  metric: '15 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min',  zone: 1 },
    ],
  },
  's7-sab': {
    name: 'Fácil + Strides', type: 'easy', week: 7, day: 'Sábado',
    note: 'Últimas acelerações antes da prova. Não canse — só desperta o sistema nervoso para a semana 8.',
    steps: [
      { kind: 'warmup', label: 'Aquecimento',    metric: '5 min',  zone: 1 },
      { kind: 'steady', label: 'Corrida fácil',  metric: '15 min', zone: 2 },
      { kind: 'repeat', reps: 6, steps: [
        { kind: 'stride',   label: 'Stride',     metric: '100 m', zone: 5 },
        { kind: 'recovery', label: 'Trote leve', metric: '1 min', zone: 1 },
      ]},
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min', zone: 1 },
    ],
  },
  's8-seg': {
    name: 'Ativação', type: 'easy', week: 8, day: 'Segunda',
    note: 'Ativação pré-prova. Trote leve + strides para despertar as pernas sem acumular fadiga.',
    steps: [
      { kind: 'steady', label: 'Trote leve', metric: '15 min', zone: 2 },
      { kind: 'repeat', reps: 4, steps: [
        { kind: 'stride',   label: 'Stride',     metric: '100 m', zone: 5 },
        { kind: 'recovery', label: 'Trote leve', metric: '1 min', zone: 1 },
      ]},
    ],
  },
  's8-ter': {
    name: 'Descanso', type: 'rest', week: 8, day: 'Terça',
    note: 'Descanso completo. Hidratação e sono em dia.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  's8-qua': {
    name: 'Fácil', type: 'easy', week: 8, day: 'Sexta',
    note: 'Pernas descansadas. Muito leve — só para não ficar parado. Menos é mais essa semana.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',    metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Corrida fácil',  metric: '10 min', zone: 1 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min',  zone: 1 },
    ],
  },
  's8-sab': {
    name: 'TIME TRIAL 5 km', type: 'race', week: 8, day: 'Sábado',
    note: 'Dia da prova. Estratégia: saia a 5:10/km nos primeiros 2 km, meta: sub-4:55/km.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',      metric: '1 km',           zone: 2 },
      { kind: 'steady',   label: 'Pace controlado',  metric: '2 km · 5:10/km', zone: 3 },
      { kind: 'tempo',    label: 'Acelerar',         metric: '2 km · 5:00/km', zone: 4 },
      { kind: 'work',     label: 'Sprint final',     metric: '1 km · 4:55/km', zone: 5 },
      { kind: 'cooldown', label: 'Desaquecimento',   metric: '5 min',          zone: 1 },
    ],
  },
};
