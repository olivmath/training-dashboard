import React, { useEffect } from 'react';
import type { Workout, Step, BaseStep, Zone } from '../data/workoutPlans';

interface Props {
  workout: Workout | null;
  onClose: () => void;
}

const ZONE_LABELS: Record<Zone, string> = {
  1: 'Zona de Batimentos 1',
  2: 'Zona de Batimentos 2',
  3: 'Zona de Batimentos 3',
  4: 'Zona de Batimentos 4',
  5: 'Zona de Batimentos 5',
};

const STEP_CONFIG: Record<string, { icon: string; bg: string; color: string }> = {
  warmup:   { icon: '↗', bg: 'rgba(6,182,212,.2)',   color: '#06b6d4' },
  cooldown: { icon: '↘', bg: 'rgba(234,179,8,.2)',    color: '#eab308' },
  steady:   { icon: '→', bg: 'rgba(96,165,250,.2)',   color: '#60a5fa' },
  tempo:    { icon: '↑', bg: 'rgba(249,115,22,.2)',   color: '#f97316' },
  work:     { icon: '↑', bg: 'rgba(34,197,94,.2)',    color: '#22c55e' },
  stride:   { icon: '⚡', bg: 'rgba(168,85,247,.2)',  color: '#a855f7' },
  recovery: { icon: '↓', bg: 'rgba(249,115,22,.15)',  color: '#fb923c' },
  rest:     { icon: '—', bg: 'rgba(63,63,70,.4)',     color: '#71717a' },
};

const ZONE_COLORS: Record<Zone, { bg: string; color: string }> = {
  1: { bg: 'rgba(113,113,122,.25)', color: '#a1a1aa' },
  2: { bg: 'rgba(96,165,250,.2)',   color: '#60a5fa' },
  3: { bg: 'rgba(245,158,11,.2)',   color: '#f59e0b' },
  4: { bg: 'rgba(249,115,22,.2)',   color: '#f97316' },
  5: { bg: 'rgba(239,68,68,.2)',    color: '#ef4444' },
};

function StepCard({ step, inRepeat = false }: { step: BaseStep; inRepeat?: boolean }) {
  const cfg = STEP_CONFIG[step.kind] ?? STEP_CONFIG.steady;
  const zoneCfg = step.zone ? ZONE_COLORS[step.zone] : null;

  return (
    <div className={`wm-step-card${inRepeat ? ' wm-step-in-repeat' : ''}`}>
      <div className="wm-step-icon" style={{ background: cfg.bg, color: cfg.color }}>
        {cfg.icon}
      </div>
      <div className="wm-step-info">
        <div className="wm-step-name">{step.label}</div>
        <div className="wm-step-meta">
          <span>{step.metric}</span>
          {zoneCfg && (
            <span className="wm-zone-badge" style={{ background: zoneCfg.bg, color: zoneCfg.color }}>
              ⟶ {ZONE_LABELS[step.zone!]}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function renderStep(step: Step, idx: number) {
  if (step.kind === 'repeat') {
    return (
      <div key={idx} className="wm-repeat-block">
        <div className="wm-repeat-header">
          <span>Repetições</span>
          <span className="wm-repeat-count">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 2l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
            </svg>
            {step.reps}
          </span>
        </div>
        {step.steps.map((s, i) => (
          <StepCard key={i} step={s} inRepeat />
        ))}
      </div>
    );
  }
  return <StepCard key={idx} step={step as BaseStep} />;
}

const TYPE_COLORS: Record<string, string> = {
  easy:  '#a1a1aa',
  tempo: '#f97316',
  intv:  '#22c55e',
  long:  '#60a5fa',
  rest:  '#71717a',
  race:  '#eab308',
};

export const WorkoutModal: React.FC<Props> = ({ workout, onClose }) => {
  useEffect(() => {
    if (!workout) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [workout, onClose]);

  if (!workout) return null;

  const accentColor = TYPE_COLORS[workout.type] ?? '#a1a1aa';

  return (
    <div className="wm-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="wm-box">
        <div className="wm-header">
          <div>
            <div className="wm-title" style={{ color: accentColor }}>
              {workout.name.toUpperCase()}
            </div>
            <div className="wm-sub">Semana {workout.week} · {workout.day}</div>
          </div>
          <button className="wm-close" onClick={onClose} aria-label="Fechar">✕</button>
        </div>

        {workout.note && (
          <div className="wm-note">{workout.note}</div>
        )}

        <div className="wm-steps">
          {workout.steps.map((step, i) => renderStep(step, i))}
        </div>
      </div>
    </div>
  );
};
