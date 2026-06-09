import React, { useState } from 'react';
import { WorkoutModal } from './WorkoutModal';
import { WORKOUT_PLANS } from '../data/workoutPlans';
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
    label: 'S1', phase: 'base', focus: 'Base aeróbica', volume: '12 km', intensity: 2, keyWorkoutId: 's1-sab', current: true,
    sessions: [
      { id: 's1-seg', day: 'Seg', name: 'Fácil', type: 'easy', summary: '30 min' },
      { id: 's1-ter', day: 'Ter', name: 'Descanso', type: 'rest', summary: '-' },
      { id: 's1-qua', day: 'Qua', name: 'Fácil + Strides', type: 'easy', summary: '30 min' },
      { id: 's1-qui', day: 'Qui', name: 'Descanso', type: 'rest', summary: '-' },
      { id: 's1-sab', day: 'Sáb', name: 'Longo', type: 'long', summary: '6 km' },
    ],
  },
  {
    label: 'S2', phase: 'ritmo', focus: 'Ativação de ritmo', volume: '14 km', intensity: 2, keyWorkoutId: 's2-qua',
    sessions: [
      { id: 's2-seg', day: 'Seg', name: 'Fácil', type: 'easy', summary: '30 min' },
      { id: 's2-ter', day: 'Ter', name: 'Descanso', type: 'rest', summary: '-' },
      { id: 's2-qua', day: 'Qua', name: 'Tempo Curto', type: 'tempo', summary: '2x1km' },
      { id: 's2-qui', day: 'Qui', name: 'Descanso', type: 'rest', summary: '-' },
      { id: 's2-sab', day: 'Sáb', name: 'Longo', type: 'long', summary: '7 km' },
    ],
  },
  {
    label: 'S3', phase: 'intervalos', focus: 'Intro intervalos', volume: '16 km', intensity: 3, keyWorkoutId: 's3-qua',
    sessions: [
      { id: 's3-seg', day: 'Seg', name: 'Fácil', type: 'easy', summary: '30 min' },
      { id: 's3-ter', day: 'Ter', name: 'Descanso', type: 'rest', summary: '-' },
      { id: 's3-qua', day: 'Qua', name: 'Tiros 400m', type: 'intv', summary: '4x400m' },
      { id: 's3-qui', day: 'Qui', name: 'Descanso', type: 'rest', summary: '-' },
      { id: 's3-sab', day: 'Sáb', name: 'Longo', type: 'long', summary: '8 km' },
    ],
  },
  {
    label: 'S4', phase: 'consolida', focus: 'Consolidação', volume: '18 km', intensity: 3, keyWorkoutId: 's4-qua',
    sessions: [
      { id: 's4-seg', day: 'Seg', name: 'Fácil', type: 'easy', summary: '35 min' },
      { id: 's4-ter', day: 'Ter', name: 'Descanso', type: 'rest', summary: '-' },
      { id: 's4-qua', day: 'Qua', name: 'Tempo 3km', type: 'tempo', summary: '3 km' },
      { id: 's4-qui', day: 'Qui', name: 'Fácil', type: 'easy', summary: '30 min' },
      { id: 's4-sab', day: 'Sáb', name: 'Longo', type: 'long', summary: '9 km' },
    ],
  },
  {
    label: 'S5', phase: 'carga', focus: 'Carga + velocidade', volume: '20 km', intensity: 4, keyWorkoutId: 's5-qua',
    sessions: [
      { id: 's5-seg', day: 'Seg', name: 'Fácil', type: 'easy', summary: '40 min' },
      { id: 's5-ter', day: 'Ter', name: 'Descanso', type: 'rest', summary: '-' },
      { id: 's5-qua', day: 'Qua', name: 'Tiros 800m', type: 'intv', summary: '4x800m' },
      { id: 's5-qui', day: 'Qui', name: 'Fácil', type: 'easy', summary: '30 min' },
      { id: 's5-sab', day: 'Sáb', name: 'Longo', type: 'long', summary: '10 km' },
    ],
  },
  {
    label: 'S6', phase: 'pico', focus: 'Pico de intensidade', volume: '15 km', intensity: 5, keyWorkoutId: 's6-qua',
    sessions: [
      { id: 's6-seg', day: 'Seg', name: 'Fácil', type: 'easy', summary: '30 min' },
      { id: 's6-ter', day: 'Ter', name: 'Descanso', type: 'rest', summary: '-' },
      { id: 's6-qua', day: 'Qua', name: 'Pirâmide', type: 'intv', summary: '1k-800-400' },
      { id: 's6-qui', day: 'Qui', name: 'Fácil', type: 'easy', summary: '20 min' },
      { id: 's6-sab', day: 'Sáb', name: 'Tempo', type: 'tempo', summary: '4 km' },
    ],
  },
  {
    label: 'S7', phase: 'afinamento', focus: 'Afinamento', volume: '10 km', intensity: 2, keyWorkoutId: 's7-qua',
    sessions: [
      { id: 's7-seg', day: 'Seg', name: 'Fácil', type: 'easy', summary: '30 min' },
      { id: 's7-ter', day: 'Ter', name: 'Descanso', type: 'rest', summary: '-' },
      { id: 's7-qua', day: 'Qua', name: 'Tiros Curtos', type: 'intv', summary: '6x200m' },
      { id: 's7-qui', day: 'Qui', name: 'Descanso', type: 'rest', summary: '-' },
      { id: 's7-sab', day: 'Sáb', name: 'Fácil + Strides', type: 'easy', summary: '30 min' },
    ],
  },
  {
    label: 'S8', phase: 'teste', focus: 'Teste de velocidade', volume: '8 km', intensity: 1, keyWorkoutId: 's8-sab',
    sessions: [
      { id: 's8-seg', day: 'Seg', name: 'Fácil', type: 'easy', summary: '20 min' },
      { id: 's8-ter', day: 'Ter', name: 'Descanso', type: 'rest', summary: '-' },
      { id: 's8-qua', day: 'Qua', name: 'Ativação', type: 'easy', summary: '15 min' },
      { id: 's8-qui', day: 'Qui', name: 'Descanso', type: 'rest', summary: '-' },
      { id: 's8-sab', day: 'Sáb', name: 'TESTE FINAL', type: 'race', summary: '5 KM' },
    ],
  },
];


export const TrainingPlan: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const openWorkout = WORKOUT_PLANS[openId ?? ''] ?? null;

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
