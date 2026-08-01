// components/Dashboard/Dashboard.tsx
'use client'; // Importante para hooks como useLocalStorage

import { useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import mockRoutines from "@/data/mockRoutines";
import RoutineCard from "@/components/RoutineCard/RoutineCard";
import WeeklyProgress from "@/components/WeeklyProgress/WeeklyProgress";
import DayFilter from "@/components/DayFilter/DayFilter";
import { DayOfWeek } from "@/types/workout";
import styles from "./Dashboard.module.scss";

type FilterOption = "Todos" | DayOfWeek;

export default function Dashboard() {
  const [routines, setRoutines] = useLocalStorage("workout_routines", mockRoutines);
  const [selectedDay, setSelectedDay] = useState<FilterOption>("Todos");

  // Acá vas a tener la lógica para cambiar el estado (toggle completed)
const toggleComplete = (id: string) => {
  setRoutines((prevRoutines) =>
    prevRoutines.map((routine) =>
      routine.id === id 
        ? { ...routine, completed: !routine.completed } 
        : routine
    )
  );
};

const filteredRoutines = selectedDay === "Todos"
    ? routines
    : routines.filter((r) => r.day === selectedDay);

  return (

  <div className={styles.dashboard}>

      <WeeklyProgress routines={routines} />
      
      <DayFilter 
        selectedDay={selectedDay} 
        onSelectDay={setSelectedDay} 
      />
      {/* Grilla o lista de tarjetas */}
      <div className={styles.containerRoutines}>
        {filteredRoutines.map((routine) => (
          <RoutineCard 
            key={routine.id} 
            routine={routine}
            onToggle={toggleComplete} 
          />
        ))}
      </div>

    </div>
  );
}