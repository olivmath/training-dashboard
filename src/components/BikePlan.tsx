import React, { useState } from 'react';
import { WorkoutModal } from './WorkoutModal';
import { BIKE_WORKOUT_PLANS } from '../data/bikeWorkoutPlans';
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
      { id: 'b1-seg', day: 'Seg', name: 'A', type: 'easy' },
      { id: 'b1-ter', day: 'Ter', name: 'B', type: 'rest' },
      { id: 'b1-qua', day: 'Qua', name: 'C', type: 'easy' },
      { id: 'b1-qui', day: 'Qui', name: 'D', type: 'rest' },
      { id: 'b1-sab', day: 'Sáb', name: 'E', type: 'long' },
    ],
  },
  {
    label: 'S2', focus: 'Resistência aeróbica',
    sessions: [
      { id: 'b2-seg', day: 'Seg', name: 'A', type: 'easy' },
      { id: 'b2-ter', day: 'Ter', name: 'B', type: 'rest' },
      { id: 'b2-qua', day: 'Qua', name: 'C', type: 'tempo' },
      { id: 'b2-qui', day: 'Qui', name: 'D', type: 'rest' },
      { id: 'b2-sab', day: 'Sáb', name: 'E', type: 'long' },
    ],
  },
  {
    label: 'S3', focus: 'Intro subidas',
    sessions: [
      { id: 'b3-seg', day: 'Seg', name: 'A', type: 'easy' },
      { id: 'b3-ter', day: 'Ter', name: 'B', type: 'rest' },
      { id: 'b3-qua', day: 'Qua', name: 'C', type: 'intv' },
      { id: 'b3-qui', day: 'Qui', name: 'D', type: 'rest' },
      { id: 'b3-sab', day: 'Sáb', name: 'E', type: 'long' },
    ],
  },
  {
    label: 'S4', focus: 'Recuperação (Deload)',
    sessions: [
      { id: 'b4-seg', day: 'Seg', name: 'A', type: 'easy' },
      { id: 'b4-ter', day: 'Ter', name: 'B', type: 'rest' },
      { id: 'b4-qua', day: 'Qua', name: 'C', type: 'easy' },
      { id: 'b4-qui', day: 'Qui', name: 'D', type: 'rest' },
      { id: 'b4-sab', day: 'Sáb', name: 'E', type: 'long' },
    ],
  },
  {
    label: 'S5', focus: 'Carga + intensidade',
    sessions: [
      { id: 'b5-seg', day: 'Seg', name: 'A', type: 'easy' },
      { id: 'b5-ter', day: 'Ter', name: 'B', type: 'rest' },
      { id: 'b5-qua', day: 'Qua', name: 'C', type: 'intv' },
      { id: 'b5-qui', day: 'Qui', name: 'D', type: 'easy' },
      { id: 'b5-sab', day: 'Sáb', name: 'E', type: 'long' },
    ],
  },
  {
    label: 'S6', focus: 'Pico de intensidade',
    sessions: [
      { id: 'b6-seg', day: 'Seg', name: 'A', type: 'easy' },
      { id: 'b6-ter', day: 'Ter', name: 'B', type: 'rest' },
      { id: 'b6-qua', day: 'Qua', name: 'C', type: 'intv' },
      { id: 'b6-qui', day: 'Qui', name: 'D', type: 'easy' },
      { id: 'b6-sab', day: 'Sáb', name: 'E', type: 'tempo' },
    ],
  },
  {
    label: 'S7', focus: 'Afinamento',
    sessions: [
      { id: 'b7-seg', day: 'Seg', name: 'A', type: 'easy' },
      { id: 'b7-ter', day: 'Ter', name: 'B', type: 'rest' },
      { id: 'b7-qua', day: 'Qua', name: 'C', type: 'intv' },
      { id: 'b7-qui', day: 'Qui', name: 'D', type: 'rest' },
      { id: 'b7-sab', day: 'Sáb', name: 'E', type: 'easy' },
    ],
  },
  {
    label: 'S8', focus: 'Time Trial',
    sessions: [
      { id: 'b8-seg', day: 'Seg', name: 'A', type: 'easy' },
      { id: 'b8-ter', day: 'Ter', name: 'B', type: 'rest' },
      { id: 'b8-qua', day: 'Qua', name: 'C', type: 'easy' },
      { id: 'b8-qui', day: 'Qui', name: 'D', type: 'rest' },
      { id: 'b8-sab', day: 'Sáb', name: 'E', type: 'race' },
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

export const BikePlan: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const openWorkout = BIKE_WORKOUT_PLANS[openId ?? ''] ?? null;

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
