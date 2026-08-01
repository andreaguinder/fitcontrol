// components/Dashboard/Dashboard.tsx
'use client'; // Importante para hooks como useLocalStorage

import { useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import mockRoutines from "@/data/mockRoutines";
import RoutineCard from "@/components/RoutineCard/RoutineCard";
import WeeklyProgress from "@/components/WeeklyProgress/WeeklyProgress";
import DayFilter from "@/components/DayFilter/DayFilter";
import { DayOfWeek, Routine } from "@/types/workout";
import styles from "./Dashboard.module.scss";

type FilterOption = "Todos" | DayOfWeek;

export default function Dashboard() {
  const [routines, setRoutines] = useLocalStorage("workout_routines", mockRoutines);
  const [selectedDay, setSelectedDay] = useState<FilterOption>("Todos");

  // Lógica para cambiar el estado de completado
  const toggleComplete = (id: string) => {
    setRoutines((prevRoutines) =>
      prevRoutines.map((routine) =>
        routine.id === id 
          ? { ...routine, completed: !routine.completed } 
          : routine
      )
    );
  };

  const updateRoutine = (updatedRoutine: Routine) => {
    setRoutines((prev) =>
      prev.map((r) => (r.id === updatedRoutine.id ? updatedRoutine : r))
    );
  };

  const handleReset = () => {
    if (confirm("¿Estás segura de que querés restablecer las rutinas por defecto? Se perderán tus cambios.")) {
      setRoutines(mockRoutines);
    }
  };

  const filteredRoutines = selectedDay === "Todos"
    ? routines
    : routines.filter((r) => r.day === selectedDay);

  return (
    <div className={styles.dashboard}>
      <WeeklyProgress routines={routines} />

      <div className={styles.actionsBar}>
        <button 
          type="button" 
          className={styles.resetBtn} 
          onClick={handleReset}
          title="Restablecer datos originales"
        >
           Restablecer rutinas
        </button>
      </div>
      
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
            onUpdate={updateRoutine}
          />
        ))}
      </div>
    </div>
  );
}