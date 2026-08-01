export type DayOfWeek = 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes' | 'Sábado' | 'Domingo';

export interface Routine {
  id: string;
  day: DayOfWeek;
  title: string;       // ej: "Híbrido (Funcional + Fuerza)"
  durationMinutes: number;
  completed: boolean;
  description: string; 
  exercises?: Exercise[]; // ej: "Rutina de fuerza y funcional para mejorar la resistencia y la fuerza muscular"
}

export interface WeeklyStats {
  completedCount: number;
  totalRoutines: number;
  streakDays: number;
}

export interface Exercise {
  id: number;
  name: string;        // ej: "Sentadillas"
  sets: number;        // ej: 3
  reps: number;        // ej: 10
}