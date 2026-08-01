import { Routine } from "@/types/workout";
import styles from "./RoutineCard.module.scss";

interface RoutineCardProps {
  routine: Routine;
  onToggle: (id: string) => void;
}

export default function RoutineCard({ routine, onToggle }: RoutineCardProps) {
  return (
    <div className={`${styles.card} ${routine.completed ? styles.completed : ''}`}>
        <div className={styles.dayContainer}>
      <h3 className={styles.day}>{routine.day}</h3>
      <div className={styles.checkboxContainer}>
        <input 
          type="checkbox"   
            checked={routine.completed}
            onChange={() => onToggle(routine.id)}
        />
        </div>
    </div>
      <p className={styles.title}>{routine.title}</p>
      <p className={styles.description}>{routine.description}</p>
      <p className={styles.durationMinutos}>{routine.durationMinutes} minutos</p>
      <div className={styles.exercises}>
        {routine.exercises?.map((exercise) => (
          <div key={exercise.id} className={styles.exercise}>
            <span>{exercise.name}</span>
          </div>
        ))}
      </div>
    </div>

  );
}
