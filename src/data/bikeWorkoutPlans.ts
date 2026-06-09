import { Workout } from './workoutPlans/types';
import { BIKE_WEEKS_1_2 } from './bikeWorkoutPlans/weeks1-2';
import { BIKE_WEEKS_3_4 } from './bikeWorkoutPlans/weeks3-4';
import { BIKE_WEEKS_5_6 } from './bikeWorkoutPlans/weeks5-6';
import { BIKE_WEEKS_7_8 } from './bikeWorkoutPlans/weeks7-8';

export const BIKE_WORKOUT_PLANS: Record<string, Workout> = {
  ...BIKE_WEEKS_1_2,
  ...BIKE_WEEKS_3_4,
  ...BIKE_WEEKS_5_6,
  ...BIKE_WEEKS_7_8,
};
