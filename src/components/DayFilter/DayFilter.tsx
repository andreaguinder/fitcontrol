// components/DayFilter/DayFilter.tsx
import { DayOfWeek } from "@/types/workout";
import styles from "./DayFilter.module.scss";

type FilterOption = "Todos" | DayOfWeek;

interface DayFilterProps {
  selectedDay: FilterOption;
  onSelectDay: (day: FilterOption) => void;
}

const days: FilterOption[] = [
  "Todos",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

export default function DayFilter({ selectedDay, onSelectDay }: DayFilterProps) {
  return (
    <div className={styles.filterContainer}>
      {days.map((day) => (
        <button
          key={day}
          className={`${styles.filterBtn} ${selectedDay === day ? styles.active : ""}`}
          onClick={() => onSelectDay(day)}
        >
          {day}
        </button>
      ))}
    </div>
  );
}