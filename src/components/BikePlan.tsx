import React, { useState } from 'react';
import { WorkoutModal } from './WorkoutModal';
import { BIKE_WORKOUT_PLANS } from '../data/bikeWorkoutPlans';
import type { WorkoutType } from '../data/workoutPlans';

interface SeshCard {
  id: string;
  day: string;
  name: string;
  type: WorkoutType;
  summary: string;
}

interface WeekData {
  label: string;
  phase: string;
  focus: string;
  volume: string;
  intensity: number;
  keyWorkoutId: string;
  current?: boolean;
  sessions: SeshCard[];
}

const WEEKS: WeekData[] = [
  {
    label: 'S1', phase: 'base', focus: 'Base aeróbica', volume: '3h', intensity: 2, keyWorkoutId: 'b1-qua', current: true,
    sessions: [
      { id: 'b1-seg', day: 'Ter', name: 'Giro Fácil', type: 'easy', summary: '45 min' },
      { id: 'b1-ter', day: 'Qua', name: 'Descanso', type: 'rest', summary: '-' },
      { id: 'b1-qua', day: 'Qui', name: 'Cadência', type: 'easy', summary: '60 min' },
      { id: 'b1-sab', day: 'Dom', name: 'Longo', type: 'long', summary: '90 min' },
    ],
  },
  {
    label: 'S2', phase: 'ritmo', focus: 'Resistência aeróbica', volume: '4h', intensity: 3, keyWorkoutId: 'b2-qua',
    sessions: [
      { id: 'b2-seg', day: 'Ter', name: 'Giro Fácil', type: 'easy', summary: '60 min' },
      { id: 'b2-ter', day: 'Qua', name: 'Descanso', type: 'rest', summary: '-' },
      { id: 'b2-qua', day: 'Qui', name: 'Tempo', type: 'tempo', summary: '2x20 min' },
      { id: 'b2-sab', day: 'Dom', name: 'Longo', type: 'long', summary: '2h' },
    ],
  },
  {
    label: 'S3', phase: 'intervalos', focus: 'Intro subidas', volume: '4.5h', intensity: 3, keyWorkoutId: 'b3-qua',
    sessions: [
      { id: 'b3-seg', day: 'Ter', name: 'Fácil', type: 'easy', summary: '60 min' },
      { id: 'b3-ter', day: 'Qua', name: 'Descanso', type: 'rest', summary: '-' },
      { id: 'b3-qua', day: 'Qui', name: 'Subidas', type: 'intv', summary: '4x5 min' },
      { id: 'b3-sab', day: 'Dom', name: 'Longo', type: 'long', summary: '2.5h' },
    ],
  },
  {
    label: 'S4', phase: 'consolida', focus: 'Deload', volume: '3h', intensity: 2, keyWorkoutId: 'b4-qua',
    sessions: [
      { id: 'b4-seg', day: 'Ter', name: 'Fácil', type: 'easy', summary: '45 min' },
      { id: 'b4-ter', day: 'Qua', name: 'Descanso', type: 'rest', summary: '-' },
      { id: 'b4-qua', day: 'Qui', name: 'Giro Leve', type: 'easy', summary: '45 min' },
      { id: 'b4-sab', day: 'Dom', name: 'Longo', type: 'long', summary: '90 min' },
    ],
  },
  {
    label: 'S5', phase: 'carga', focus: 'Carga + Int', volume: '5h', intensity: 4, keyWorkoutId: 'b5-qua',
    sessions: [
      { id: 'b5-seg', day: 'Ter', name: 'Fácil', type: 'easy', summary: '60 min' },
      { id: 'b5-ter', day: 'Qua', name: 'Descanso', type: 'rest', summary: '-' },
      { id: 'b5-qua', day: 'Qui', name: 'Intervalos', type: 'intv', summary: '5x6 min' },
      { id: 'b5-sab', day: 'Dom', name: 'Longo', type: 'long', summary: '3h' },
    ],
  },
  {
    label: 'S6', phase: 'pico', focus: 'Pico Int', volume: '4h', intensity: 5, keyWorkoutId: 'b6-qua',
    sessions: [
      { id: 'b6-seg', day: 'Ter', name: 'Fácil', type: 'easy', summary: '45 min' },
      { id: 'b6-ter', day: 'Qua', name: 'Descanso', type: 'rest', summary: '-' },
      { id: 'b6-qua', day: 'Qui', name: 'Sprint', type: 'intv', summary: '6x2 min' },
      { id: 'b6-sab', day: 'Dom', name: 'Tempo', type: 'tempo', summary: '2h' },
    ],
  },
  {
    label: 'S7', phase: 'afinamento', focus: 'Afinamento', volume: '2.5h', intensity: 2, keyWorkoutId: 'b7-qua',
    sessions: [
      { id: 'b7-seg', day: 'Ter', name: 'Fácil', type: 'easy', summary: '45 min' },
      { id: 'b7-ter', day: 'Qua', name: 'Descanso', type: 'rest', summary: '-' },
      { id: 'b7-qua', day: 'Qui', name: 'Ativação', type: 'intv', summary: '4x1 min' },
      { id: 'b7-sab', day: 'Dom', name: 'Fácil', type: 'easy', summary: '60 min' },
    ],
  },
  {
    label: 'S8', phase: 'teste', focus: 'Time Trial', volume: '2h', intensity: 1, keyWorkoutId: 'b8-sab',
    sessions: [
      { id: 'b8-seg', day: 'Ter', name: 'Fácil', type: 'easy', summary: '30 min' },
      { id: 'b8-ter', day: 'Qua', name: 'Descanso', type: 'rest', summary: '-' },
      { id: 'b8-qua', day: 'Qui', name: 'Ativação', type: 'easy', summary: '30 min' },
      { id: 'b8-sab', day: 'Dom', name: 'TESTE FINAL', type: 'race', summary: '40 KM' },
    ],
  },
];

export const BikePlan: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const openWorkout = BIKE_WORKOUT_PLANS[openId ?? ''] ?? null;

  return (
    <>
      <div className="plan-grid">
        {WEEKS.map((week) => (
          <div key={week.label} className={`week-col ${week.phase} ${week.current ? 'current' : ''}`}>
            <div className="week-header">
              <div className="week-label">{week.label}</div>
              <div className="week-vol">{week.volume}</div>
              {week.current && <div className="current-tag">SEMANA ATUAL</div>}
            </div>

            <div className="week-focus">
              <strong>{week.focus}</strong>
              <div className="intensity-bar">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className={`bar ${i < week.intensity ? 'active' : ''}`} />
                ))}
              </div>
            </div>

            {week.sessions.map((s) => {
              const isKey = s.id === week.keyWorkoutId;
              return (
                <div
                  key={s.id}
                  className={`sesh ${s.type} ${isKey ? 'key-workout' : ''}`}
                  onClick={s.type !== 'rest' ? () => setOpenId(s.id) : undefined}
                >
                  {isKey && <div className="key-badge">🎯 Treino-chave</div>}
                  <div className="sesh-meta">
                    <div className="sesh-day">{s.day}</div>
                    <div className="sesh-summary">{s.summary}</div>
                  </div>
                  <div className="sesh-name">{s.name}</div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <WorkoutModal workout={openWorkout} onClose={() => setOpenId(null)} />
    </>
  );
};
