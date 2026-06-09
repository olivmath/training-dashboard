import type { Workout } from './workoutPlans';

export const BIKE_WORKOUT_PLANS: Record<string, Workout> = {
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
    note: 'Primeiro estímulo de ritmo sustentado. Z3 é desconfortável mas controlável — você consegue falar poucas palavras, não frases. Não acelere demais no início.',
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
    note: 'Longo com +5 min vs semana 1. Mantenha Z2 — se o coração sobe, reduza a marcha.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Pedalada Z2',    metric: '40 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min',  zone: 1 },
    ],
  },

  'b3-seg': {
    name: 'Pedalada Leve', type: 'easy', week: 3, day: 'Segunda',
    note: 'Trote de recuperação em Z2.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Pedalada Z2',    metric: '25 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min',  zone: 1 },
    ],
  },
  'b3-ter': {
    name: 'Descanso', type: 'rest', week: 3, day: 'Terça',
    note: 'Descanso.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  'b3-qua': {
    name: 'Subidas', type: 'intv', week: 3, day: 'Quarta',
    note: 'Intervalos em subida ou marcha pesada simulando subida. Esforço Z4 — difícil falar. Recuperação completa entre séries (cadência leve, sem parar).',
    steps: [
      { kind: 'warmup', label: 'Aquecimento', metric: '10 min', zone: 1 },
      { kind: 'repeat', reps: 5, steps: [
        { kind: 'work',     label: 'Subida / esforço Z4', metric: '2 min', zone: 4 },
        { kind: 'recovery', label: 'Recuperação leve',     metric: '2 min', zone: 1 },
      ]},
      { kind: 'cooldown', label: 'Desaquecimento', metric: '10 min', zone: 1 },
    ],
  },
  'b3-qui': {
    name: 'Descanso', type: 'rest', week: 3, day: 'Quinta',
    note: 'Descanso.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  'b3-sab': {
    name: 'Longo', type: 'long', week: 3, day: 'Sábado',
    note: 'Longo com volume crescente. Se a FC subir acima de Z2 nos últimos 10 min, reduza o ritmo — resistência aeróbica leva semanas para construir.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Pedalada Z2',    metric: '45 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min',  zone: 1 },
    ],
  },

  'b4-seg': {
    name: 'Regenerativo', type: 'easy', week: 4, day: 'Segunda',
    note: 'Semana de deload — volume reduzido deliberadamente. O corpo absorve as semanas anteriores nessa semana. Resistir ao impulso de treinar mais.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Pedalada Z1',    metric: '20 min', zone: 1 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min',  zone: 1 },
    ],
  },
  'b4-ter': {
    name: 'Descanso', type: 'rest', week: 4, day: 'Terça',
    note: 'Descanso.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  'b4-qua': {
    name: 'Cadência', type: 'easy', week: 4, day: 'Quarta',
    note: 'Foco total em cadência. Objetivo: manter 88–92 rpm por toda a sessão sem marcha pesada. Pedal leve é o indicador correto.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',             metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Z2 cadência ≥ 88 rpm',    metric: '25 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento',           metric: '5 min',  zone: 1 },
    ],
  },
  'b4-qui': {
    name: 'Descanso', type: 'rest', week: 4, day: 'Quinta',
    note: 'Descanso.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  'b4-sab': {
    name: 'Longo Curto', type: 'long', week: 4, day: 'Sábado',
    note: 'Longo mais curto do que semana 3 — faz parte do deload. Mantenha Z2.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Pedalada Z2',    metric: '35 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min',  zone: 1 },
    ],
  },

  'b5-seg': {
    name: 'Pedalada Leve', type: 'easy', week: 5, day: 'Segunda',
    note: 'Volta ao volume. Semana 5 marca o início da fase de intensidade.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Pedalada Z2',    metric: '30 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min',  zone: 1 },
    ],
  },
  'b5-ter': {
    name: 'Descanso', type: 'rest', week: 5, day: 'Terça',
    note: 'Descanso.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  'b5-qua': {
    name: 'Intervalos Z4', type: 'intv', week: 5, day: 'Quarta',
    note: 'Intervalos de 4 min em Z4 — ritmo de corrida de bicicleta, difícil mas sustentável por cada bloco. A recuperação de 3 min é essencial — não reduza.',
    steps: [
      { kind: 'warmup', label: 'Aquecimento', metric: '10 min', zone: 1 },
      { kind: 'repeat', reps: 4, steps: [
        { kind: 'work',     label: 'Intervalo Z4', metric: '4 min', zone: 4 },
        { kind: 'recovery', label: 'Recuperação',   metric: '3 min', zone: 1 },
      ]},
      { kind: 'cooldown', label: 'Desaquecimento', metric: '10 min', zone: 1 },
    ],
  },
  'b5-qui': {
    name: 'Regenerativo', type: 'easy', week: 5, day: 'Quinta',
    note: 'Pedalada muito leve para limpar o lactato dos intervalos de quarta.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Pedalada Z1',    metric: '20 min', zone: 1 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min',  zone: 1 },
    ],
  },
  'b5-sab': {
    name: 'Longo + Z3', type: 'long', week: 5, day: 'Sábado',
    note: 'Longo com bloco de ritmo. Os 15 min em Z3 no meio do longo ensinam o corpo a manter ritmo com fadiga acumulada.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Pedalada Z2',    metric: '20 min', zone: 2 },
      { kind: 'tempo',    label: 'Bloco Z3',       metric: '15 min', zone: 3 },
      { kind: 'steady',   label: 'Volta Z2',        metric: '15 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min',  zone: 1 },
    ],
  },

  'b6-seg': {
    name: 'Pedalada Leve', type: 'easy', week: 6, day: 'Segunda',
    note: 'Z2 tranquilo antes da sessão de pico na quarta.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Pedalada Z2',    metric: '25 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min',  zone: 1 },
    ],
  },
  'b6-ter': {
    name: 'Descanso', type: 'rest', week: 6, day: 'Terça',
    note: 'Descanso.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  'b6-qua': {
    name: 'Pirâmide', type: 'intv', week: 6, day: 'Quarta',
    note: 'Pirâmide de intervalos — volume acumulado alto em Z4. A pirâmide distribui melhor a fadiga que blocos iguais.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',       metric: '10 min', zone: 1 },
      { kind: 'work',     label: '2 min Z4',           metric: '2 min',  zone: 4 },
      { kind: 'recovery', label: 'Recuperação',        metric: '2 min',  zone: 1 },
      { kind: 'work',     label: '4 min Z4',           metric: '4 min',  zone: 4 },
      { kind: 'recovery', label: 'Recuperação',        metric: '2 min',  zone: 1 },
      { kind: 'work',     label: '6 min Z4 (pico)',    metric: '6 min',  zone: 4 },
      { kind: 'recovery', label: 'Recuperação',        metric: '3 min',  zone: 1 },
      { kind: 'work',     label: '4 min Z4',           metric: '4 min',  zone: 4 },
      { kind: 'recovery', label: 'Recuperação',        metric: '2 min',  zone: 1 },
      { kind: 'work',     label: '2 min Z4',           metric: '2 min',  zone: 4 },
      { kind: 'cooldown', label: 'Desaquecimento',     metric: '10 min', zone: 1 },
    ],
  },
  'b6-qui': {
    name: 'Pedalada Leve', type: 'easy', week: 6, day: 'Quinta',
    note: 'Recuperação ativa pós-pirâmide.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Pedalada Z1–Z2', metric: '20 min', zone: 1 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min',  zone: 1 },
    ],
  },
  'b6-sab': {
    name: 'Tempo 20 min', type: 'tempo', week: 6, day: 'Sábado',
    note: 'Bloco de 20 min em Z3 — o maior esforço contínuo do plano. Saia conservador nos primeiros 5 min, mantenha constante, termine forte.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',       metric: '10 min', zone: 1 },
      { kind: 'tempo',    label: 'Tempo sustentado',   metric: '20 min', zone: 3 },
      { kind: 'cooldown', label: 'Desaquecimento',     metric: '10 min', zone: 1 },
    ],
  },

  'b7-seg': {
    name: 'Pedalada Leve', type: 'easy', week: 7, day: 'Segunda',
    note: 'Semana de afinamento — volume cai, qualidade permanece. Pernas frescas para o time trial.',
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
    note: 'Tiros curtos de alta intensidade para manter os neuromotores afiados sem acumular fadiga. Recuperação longa entre eles.',
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
    note: 'Pedalada leve com sprints finais para ativar as fibras rápidas antes do time trial.',
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
    note: 'Pernas descansadas. Pedalada muito leve — o esforço hoje não melhora o resultado de sábado, mas pode piorar.',
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
    note: 'Ativação leve com 3 sprints curtos para acordar as pernas sem cansar. Última sessão antes do time trial.',
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
    note: 'Time trial de 10 km no seu percurso favorito. Saia nos primeiros 2 km a ~70% do esforço máximo, construa gradualmente. Meta: velocidade média ≥ 22 km/h em terreno plano.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',      metric: '10 min', zone: 1 },
      { kind: 'work',     label: 'TIME TRIAL 10 km',  metric: '10 km',  zone: 4 },
      { kind: 'cooldown', label: 'Desaquecimento',    metric: '10 min', zone: 1 },
    ],
  },
};
