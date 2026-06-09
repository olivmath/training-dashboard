import type { Workout } from './types';

export const WEEKS_5_6: Record<string, Workout> = {
  's5-seg': {
    name: 'Fácil', type: 'easy', week: 5, day: 'Segunda',
    note: 'Trote para ativar. 35 min contínuos — mais que nas semanas anteriores.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Corrida fácil', metric: '25 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min', zone: 1 },
    ],
  },
  's5-ter': {
    name: 'Descanso', type: 'rest', week: 5, day: 'Terça',
    note: 'Descanso completo.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  's5-qua': {
    name: 'Tiros 800 m', type: 'intv', week: 5, day: 'Quarta',
    note: 'Dobro do volume intervalado da S3. 5:10/km por 800 m é desafiador — controle o pace nos primeiros 400 m de cada tiro.',
    steps: [
      { kind: 'warmup', label: 'Aquecimento', metric: '1.5 km', zone: 2 },
      { kind: 'repeat', reps: 4, steps: [
        { kind: 'work',     label: 'Tiro',        metric: '800 m · 5:10/km', zone: 4 },
        { kind: 'recovery', label: 'Recuperação', metric: '90 s',            zone: 1 },
      ]},
      { kind: 'cooldown', label: 'Desaquecimento', metric: '1 km', zone: 1 },
    ],
  },
  's5-qui': {
    name: 'Regenerativo', type: 'easy', week: 5, day: 'Quinta',
    note: 'Trote muito leve para acelerar a recuperação dos tiros de quarta. Não olhe para o pace — só mova as pernas.',
    steps: [
      { kind: 'steady', label: 'Trote regenerativo', metric: '20 min · 7:00/km', zone: 1 },
    ],
  },
  's5-sab': {
    name: 'Longo', type: 'long', week: 5, day: 'Sábado',
    note: '10 km com estímulo progressivo. Os últimos 3 km aceleram para zona de corrida de prova — não antecipe.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '1 km',           zone: 1 },
      { kind: 'steady',   label: 'Corrida base',  metric: '6 km',           zone: 2 },
      { kind: 'tempo',    label: 'Progressivo',   metric: '3 km · 5:50/km', zone: 3 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '—',             zone: 1 },
    ],
  },
  's6-seg': {
    name: 'Fácil', type: 'easy', week: 6, day: 'Segunda',
    note: 'Semana de pico — a recuperação de hoje é tão importante quanto o treino de quarta.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Corrida fácil', metric: '20 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min', zone: 1 },
    ],
  },
  's6-ter': {
    name: 'Descanso', type: 'rest', week: 6, day: 'Terça',
    note: 'Descanso completo. Semana de carga máxima — poupe energia para quinta e sábado.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  's6-qua': {
    name: 'Pirâmide', type: 'intv', week: 6, day: 'Quarta',
    note: 'Sessão mais dura do plano. Saia conservador no 400 inicial — a pirâmide inteira leva ~20 min de esforço total.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',    metric: '1.5 km',          zone: 2 },
      { kind: 'work',     label: 'Tiro 400 m',     metric: '400 m · 4:50/km', zone: 5 },
      { kind: 'recovery', label: 'Recuperação',    metric: '90 s',            zone: 1 },
      { kind: 'work',     label: 'Tiro 800 m',     metric: '800 m · 5:00/km', zone: 5 },
      { kind: 'recovery', label: 'Recuperação',    metric: '90 s',            zone: 1 },
      { kind: 'work',     label: 'Tiro 1200 m',    metric: '1200 m · 5:10/km', zone: 4 },
      { kind: 'recovery', label: 'Recuperação',    metric: '90 s',            zone: 1 },
      { kind: 'work',     label: 'Tiro 800 m',     metric: '800 m · 5:00/km', zone: 5 },
      { kind: 'recovery', label: 'Recuperação',    metric: '90 s',            zone: 1 },
      { kind: 'work',     label: 'Tiro 400 m',     metric: '400 m · 4:50/km', zone: 5 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '1 km',            zone: 1 },
    ],
  },
  's6-qui': {
    name: 'Fácil', type: 'easy', week: 6, day: 'Quinta',
    note: 'Trote leve para não acumular fadiga antes do tempo de sábado.',
    steps: [{ kind: 'steady', label: 'Corrida fácil', metric: '25 min', zone: 2 }],
  },
  's6-sab': {
    name: 'Tempo 4 km', type: 'tempo', week: 6, day: 'Sábado',
    note: '4 km contínuos a 5:20/km. Esse será seu pace de corrida de 10 km daqui a alguns meses.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',    metric: '1.5 km',          zone: 2 },
      { kind: 'tempo',    label: 'Tempo contínuo', metric: '4 km · 5:20/km',  zone: 4 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '1 km',            zone: 1 },
    ],
  },
};
