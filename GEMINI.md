# Training Dashboard

A React-based dashboard for tracking and planning triathlon training (Run, Bike, and Glossary), inspired by "The Triathlete's Training Bible" by Joe Friel.

## Project Overview

*   **Purpose:** Visualize historical training data (from Strava, Apple Watch, etc.) and provide a structured 8-week training plan for running and cycling.
*   **Core Technologies:**
    *   **Frontend:** [React 19](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/).
    *   **Build Tool:** [Vite 8](https://vitejs.dev/).
    *   **Deployment:** Configured with a base path `/training-dashboard/` in `vite.config.ts` for compatibility with GitHub Pages.
    *   **Charts:** [Chart.js](https://www.chartjs.org/) with [react-chartjs-2](https://react-chartjs-2.js.org/).
    *   **Icons:** [Lucide React](https://lucide.dev/).
    *   **Styling:** Vanilla CSS with a focus on CSS Variables for theming (Dark/Light mode).
*   **Architecture:**
    *   **Data-Driven:** The dashboard is powered by static data files in `src/data/`.
    *   **Tabbed Interface:** Separate views for Running, Cycling, and a Training Glossary.
    *   **Hook-Based Logic:** Data processing and aggregation are handled via custom hooks (e.g., `useRunData`, `useBikeData`).

## Building and Running

### Prerequisites
*   Node.js (latest LTS recommended)
*   npm or yarn

### Commands
*   `npm install`: Install dependencies.
*   `npm run dev`: Start the development server with Hot Module Replacement (HMR).
*   `npm run build`: Compile TypeScript and build the project for production.
*   `npm run lint`: Run ESLint to check for code quality issues.
*   `npm run preview`: Locally preview the production build.
*   `npm run deploy`: Build and deploy the application to GitHub Pages.

## Architectural Map

The application follows a unidirectional data flow and a modular component structure:

1.  **Data Layer (`src/data/`):** Static TypeScript files containing raw datasets and type definitions.
2.  **Logic Layer (`src/hooks/`):** Custom hooks that consume raw data, perform aggregations, and provide computed values (KPIs, chart data) to components.
3.  **UI Layer (`src/components/`):**
    *   **Layout/Containers:** `App.tsx` and high-level tab components (`RunTab`, `BikeTab`).
    *   **Feature Modules:** Components specific to a sport (e.g., `RunKPIs`, `BikeTable`).
    *   **Common/Atomic:** Reusable, stateless UI atoms (e.g., `KPICard`, `ChartCard`).

---

## File Tree & Component Ownership

To prevent duplication, always verify if a component or utility already exists in the appropriate directory:

```text
src/
├── components/          # UI COMPONENTS
│   ├── common/         # REUSABLE/GENERIC (Check here first!)
│   │   ├── BioCard.tsx
│   │   ├── ChartCard.tsx
│   │   ├── InsightCard.tsx
│   │   └── KPICard.tsx
│   ├── BikeTab/        # BIKE-SPECIFIC MODULES
│   │   ├── BikeCharts.tsx
│   │   ├── BikeInsights.tsx
│   │   ├── BikeKPIs.tsx
│   │   └── BikeTable.tsx
│   ├── RunTab/         # RUN-SPECIFIC MODULES
│   │   ├── RunBio.tsx
│   │   ├── RunCharts.tsx
│   │   ├── RunInsights.tsx
│   │   ├── RunKPIs.tsx
│   │   ├── RunTable.tsx
│   │   └── RunTips.tsx
│   ├── AppHeader.tsx   # Global Header
│   ├── WorkoutModal.tsx # Shared Modal for Plans
│   └── ...
├── hooks/              # DATA LOGIC & STATE
│   ├── useBikeData.ts  # Bike aggregations
│   └── useRunData.ts   # Run aggregations
├── data/               # SOURCE OF TRUTH (DATA)
│   ├── dashboardData.ts # Main dataset
│   ├── workoutPlans/   # Run plans
│   └── bikeWorkoutPlans/ # Bike plans
├── styles/             # CSS & THEME
│   ├── variables.css   # Design Tokens (Colors, Spacing)
│   ├── components/     # Component-specific styles
│   └── ...
└── utils/              # PURE HELPERS
    ├── charts.ts       # Chart.js config helpers
    └── math.ts         # Calculation helpers
```

## Development Conventions

### 🚫 No Duplication Mandate
*   **Search First:** Before creating a new component, search `src/components/common/` and the relevant feature folder.
*   **Promote to Common:** If a component is needed in both `RunTab` and `BikeTab`, move it to `src/components/common/` and generalize its props.
*   **Shared Logic:** Business logic must reside in `src/hooks/` or `src/utils/`, never duplicated inside component files.

### Data Management
*   **Static Data:** All historical data is located in `src/data/dashboardData.ts`. This includes `RUNS`, `BIKES`, and `GLOSSARY` arrays.
*   **Workout Plans:** Structured plans are split by sport and weeks in `src/data/workoutPlans/` and `src/data/bikeWorkoutPlans/`.
*   **Adding Data:** To add new workouts, update the relevant arrays in `src/data/dashboardData.ts` following the `Run` or `Bike` interfaces.

### Components and Styling
*   **Modular Components:** Components are organized by feature (e.g., `RunTab/`, `BikeTab/`) and shared utilities (`common/`).
*   **CSS Variables:** Global styles and themes are defined in `src/styles/variables.css`. Always use CSS variables for colors and spacing to maintain theme compatibility.
*   **Strict Typing:** Maintain strict TypeScript definitions for all props and data models.

### Documentation
*   The `docs/` directory contains supporting text files (in Portuguese) providing context and theoretical background based on training science.

## Directory Structure Highlights
*   `src/components/`: UI components organized by feature.
*   `src/data/`: Static datasets and workout plan definitions.
*   `src/hooks/`: Custom React hooks for data aggregation.
*   `src/styles/`: CSS files, using a modular approach.
*   `src/utils/`: Helper functions for charts and math.
