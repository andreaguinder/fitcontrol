// components/WeeklyProgress/WeeklyProgress.tsx
import { Routine } from "@/types/workout";
import ProgressBar from "@/components/WeeklyProgress/ProgressBar";
import styles from "./WeeklyProgress.module.scss";

interface WeeklyProgressProps {
  routines: Routine[];
}

export default function WeeklyProgress({ routines }: WeeklyProgressProps) {
  const total = routines.length;
  const completed = routines.filter((r) => r.completed).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className={styles.progressContainer}>
      <div className={styles.header}>
        <h2>Progreso Semanal</h2>
        <span>{percentage}%</span>
      </div>
      <ProgressBar percentage={percentage} />
      <p className={styles.stats}>
        {completed} de {total} rutinas completadas
      </p>
    </div>
  );
}