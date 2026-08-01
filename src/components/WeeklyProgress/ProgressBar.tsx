// components/WeeklyProgress/ProgressBar.tsx
import styles from "./WeeklyProgress.module.scss";

interface ProgressBarProps {
  percentage: number;
}

export default function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <div className={styles.barTrack}>
      <div 
        className={styles.barFill} 
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}