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
