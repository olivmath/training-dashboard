export type StepKind = 'warmup' | 'cooldown' | 'steady' | 'tempo' | 'work' | 'stride' | 'recovery' | 'rest';
export type WorkoutType = 'easy' | 'tempo' | 'intv' | 'long' | 'rest' | 'race';
export type Zone = 1 | 2 | 3 | 4 | 5;

export interface BaseStep {
  kind: StepKind;
  label: string;
  metric: string;
  zone: Zone | null;
}

export interface RepeatBlock {
  kind: 'repeat';
  reps: number;
  steps: BaseStep[];
}

export type Step = BaseStep | RepeatBlock;

export interface Workout {
  name: string;
  type: WorkoutType;
  week: number;
  day: string;
  note: string;
  steps: Step[];
}

export const WORKOUT_PLANS: Record<string, Workout> = {
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
    note: 'Sessão mais dura do plano. Saia conservador no 400 inicial — a pirâmide inteira leva ~20 min de esforço total. Desça com a mesma seriedade que sobe.',
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
    steps: [
      { kind: 'steady', label: 'Corrida fácil', metric: '25 min', zone: 2 },
    ],
  },
  's6-sab': {
    name: 'Tempo 4 km', type: 'tempo', week: 6, day: 'Sábado',
    note: '4 km contínuos a 5:20/km. Esse será seu pace de corrida de 10 km daqui a alguns meses. Agora sente difícil — é assim que deve ser.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',    metric: '1.5 km',          zone: 2 },
      { kind: 'tempo',    label: 'Tempo contínuo', metric: '4 km · 5:20/km',  zone: 4 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '1 km',            zone: 1 },
    ],
  },

  's7-seg': {
    name: 'Fácil', type: 'easy', week: 7, day: 'Segunda',
    note: 'Semana de afinamento — menos volume, mesma qualidade. Deixa o corpo absorver as 6 semanas anteriores.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Corrida fácil', metric: '15 min', zone: 2 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min', zone: 1 },
    ],
  },
  's7-ter': {
    name: 'Descanso', type: 'rest', week: 7, day: 'Terça',
    note: 'Descanso completo.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  's7-qua': {
    name: 'Tiros Curtos', type: 'intv', week: 7, day: 'Quarta',
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
  's7-qui': {
    name: 'Descanso', type: 'rest', week: 7, day: 'Quinta',
    note: 'Descanso completo. Deixa as pernas descansarem para os strides de sábado.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  's7-sab': {
    name: 'Fácil + Strides', type: 'easy', week: 7, day: 'Sábado',
    note: 'Últimas acelerações antes da prova. Não canse — só desperta o sistema nervoso para a semana 8.',
    steps: [
      { kind: 'warmup', label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady', label: 'Corrida fácil', metric: '15 min', zone: 2 },
      { kind: 'repeat', reps: 6, steps: [
        { kind: 'stride',   label: 'Stride',     metric: '100 m', zone: 5 },
        { kind: 'recovery', label: 'Trote leve', metric: '1 min', zone: 1 },
      ]},
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min', zone: 1 },
    ],
  },

  's8-seg': {
    name: 'Fácil', type: 'easy', week: 8, day: 'Segunda',
    note: 'Pernas descansadas. Muito leve — só para não ficar parado. Menos é mais essa semana.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',   metric: '5 min',  zone: 1 },
      { kind: 'steady',   label: 'Corrida fácil', metric: '10 min', zone: 1 },
      { kind: 'cooldown', label: 'Desaquecimento', metric: '5 min', zone: 1 },
    ],
  },
  's8-ter': {
    name: 'Descanso', type: 'rest', week: 8, day: 'Terça',
    note: 'Descanso completo. Hidratação e sono em dia.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  's8-qua': {
    name: 'Ativação', type: 'easy', week: 8, day: 'Quarta',
    note: 'Ativação pré-prova. Trote leve + strides para despertar as pernas sem acumular fadiga.',
    steps: [
      { kind: 'steady', label: 'Trote leve', metric: '15 min', zone: 2 },
      { kind: 'repeat', reps: 4, steps: [
        { kind: 'stride',   label: 'Stride',     metric: '100 m', zone: 5 },
        { kind: 'recovery', label: 'Trote leve', metric: '1 min', zone: 1 },
      ]},
    ],
  },
  's8-qui': {
    name: 'Descanso', type: 'rest', week: 8, day: 'Quinta',
    note: 'Descanso total. Sono, alimentação, hidratação. Prepare o equipamento e o percurso.',
    steps: [{ kind: 'rest', label: 'Descanso', metric: '—', zone: null }],
  },
  's8-sab': {
    name: 'TIME TRIAL 5 km', type: 'race', week: 8, day: 'Sábado',
    note: 'Dia da prova. Estratégia: saia a 5:10/km nos primeiros 2 km (vai parecer fácil — confie), acelere nos km 3–4, dê tudo no km 5. Meta: sub-4:55/km.',
    steps: [
      { kind: 'warmup',   label: 'Aquecimento',     metric: '1 km',           zone: 2 },
      { kind: 'steady',   label: 'Pace controlado', metric: '2 km · 5:10/km', zone: 3 },
      { kind: 'tempo',    label: 'Acelerar',        metric: '2 km · 5:00/km', zone: 4 },
      { kind: 'work',     label: 'Sprint final',    metric: '1 km · 4:55/km', zone: 5 },
      { kind: 'cooldown', label: 'Desaquecimento',  metric: '5 min',          zone: 1 },
    ],
  },
};
