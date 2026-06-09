import { Workout } from './workoutPlans/types';
import { WEEKS_1_2 } from './workoutPlans/weeks1-2';
import { WEEKS_3_4 } from './workoutPlans/weeks3-4';
import { WEEKS_5_6 } from './workoutPlans/weeks5-6';
import { WEEKS_7_8 } from './workoutPlans/weeks7-8';

export * from './workoutPlans/types';

export const WORKOUT_PLANS: Record<string, Workout> = {
  ...WEEKS_1_2,
  ...WEEKS_3_4,
  ...WEEKS_5_6,
  ...WEEKS_7_8,
};
