import React, { useState } from 'react';
import { WorkoutModal } from './WorkoutModal';
import { WORKOUT_PLANS } from '../data/workoutPlans';
import type { WorkoutType } from '../data/workoutPlans';

interface SeshCard {
  id: string;
  day: string;
  name: string;
  type: WorkoutType;
}

interface WeekData {
  label: string;
  focus: string;
  current?: boolean;
  sessions: SeshCard[];
}

const WEEKS: WeekData[] = [
  {
    label: 'S1', focus: 'Base aeróbica', current: true,
    sessions: [
      { id: 's1-seg', day: 'Seg', name: 'A', type: 'easy' },
      { id: 's1-ter', day: 'Ter', name: 'B', type: 'rest' },
      { id: 's1-qua', day: 'Qua', name: 'C', type: 'easy' },
      { id: 's1-qui', day: 'Qui', name: 'D', type: 'rest' },
      { id: 's1-sab', day: 'Sáb', name: 'E', type: 'long' },
    ],
  },
  {
    label: 'S2', focus: 'Ativação de ritmo',
    sessions: [
      { id: 's2-seg', day: 'Seg', name: 'A', type: 'easy' },
      { id: 's2-ter', day: 'Ter', name: 'B', type: 'rest' },
      { id: 's2-qua', day: 'Qua', name: 'C', type: 'tempo' },
      { id: 's2-qui', day: 'Qui', name: 'D', type: 'rest' },
      { id: 's2-sab', day: 'Sáb', name: 'E', type: 'long' },
    ],
  },
  {
    label: 'S3', focus: 'Intro intervalos',
    sessions: [
      { id: 's3-seg', day: 'Seg', name: 'A', type: 'easy' },
      { id: 's3-ter', day: 'Ter', name: 'B', type: 'rest' },
      { id: 's3-qua', day: 'Qua', name: 'C', type: 'intv' },
      { id: 's3-qui', day: 'Qui', name: 'D', type: 'rest' },
      { id: 's3-sab', day: 'Sáb', name: 'E', type: 'long' },
    ],
  },
  {
    label: 'S4', focus: 'Consolidação',
    sessions: [
      { id: 's4-seg', day: 'Seg', name: 'A', type: 'easy' },
      { id: 's4-ter', day: 'Ter', name: 'B', type: 'rest' },
      { id: 's4-qua', day: 'Qua', name: 'C', type: 'tempo' },
      { id: 's4-qui', day: 'Qui', name: 'D', type: 'easy' },
      { id: 's4-sab', day: 'Sáb', name: 'E', type: 'long' },
    ],
  },
  {
    label: 'S5', focus: 'Carga + velocidade',
    sessions: [
      { id: 's5-seg', day: 'Seg', name: 'A', type: 'easy' },
      { id: 's5-ter', day: 'Ter', name: 'B', type: 'rest' },
      { id: 's5-qua', day: 'Qua', name: 'C', type: 'intv' },
      { id: 's5-qui', day: 'Qui', name: 'D', type: 'easy' },
      { id: 's5-sab', day: 'Sáb', name: 'E', type: 'long' },
    ],
  },
  {
    label: 'S6', focus: 'Pico de intensidade',
    sessions: [
      { id: 's6-seg', day: 'Seg', name: 'A', type: 'easy' },
      { id: 's6-ter', day: 'Ter', name: 'B', type: 'rest' },
      { id: 's6-qua', day: 'Qua', name: 'C', type: 'intv' },
      { id: 's6-qui', day: 'Qui', name: 'D', type: 'easy' },
      { id: 's6-sab', day: 'Sáb', name: 'E', type: 'tempo' },
    ],
  },
  {
    label: 'S7', focus: 'Afinamento',
    sessions: [
      { id: 's7-seg', day: 'Seg', name: 'A', type: 'easy' },
      { id: 's7-ter', day: 'Ter', name: 'B', type: 'rest' },
      { id: 's7-qua', day: 'Qua', name: 'C', type: 'intv' },
      { id: 's7-qui', day: 'Qui', name: 'D', type: 'rest' },
      { id: 's7-sab', day: 'Sáb', name: 'E', type: 'easy' },
    ],
  },
  {
    label: 'S8', focus: 'Teste de velocidade',
    sessions: [
      { id: 's8-seg', day: 'Seg', name: 'A', type: 'easy' },
      { id: 's8-ter', day: 'Ter', name: 'B', type: 'rest' },
      { id: 's8-qua', day: 'Qua', name: 'C', type: 'easy' },
      { id: 's8-qui', day: 'Qui', name: 'D', type: 'rest' },
      { id: 's8-sab', day: 'Sáb', name: 'E', type: 'race' },
    ],
  },
];

const TAG_LABELS: Record<WorkoutType, string> = {
  easy:  'fácil',
  tempo: 'tempo',
  intv:  'intervalado',
  long:  'longo',
  rest:  'descanso',
  race:  'prova',
};

export const TrainingPlan: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const openWorkout = WORKOUT_PLANS[openId ?? ''] ?? null;

  return (
    <>
      <div className="plan-grid">
        {WEEKS.map((week) => (
          <div key={week.label} className={`week-col${week.current ? ' now' : ''}`}>
            <div className="week-head">{week.label}</div>
            <div className="week-focus">{week.focus}</div>
            {week.sessions.map((s) => (
              <div
                key={s.id}
                className={`sesh ${s.type} sesh-${s.name.toLowerCase()}`}
                onClick={s.type !== 'rest' ? () => setOpenId(s.id) : undefined}
              >
                <div className="sesh-day">{s.day}</div>
                <div className="sesh-name">{s.name}</div>
                <span className="sesh-tag">{TAG_LABELS[s.type]}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <WorkoutModal workout={openWorkout} onClose={() => setOpenId(null)} />
    </>
  );
};
