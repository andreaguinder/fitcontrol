// components/RoutineCard/RoutineCard.tsx
'use client';

import { useState } from "react";
import { Routine, Exercise } from "@/types/workout";
import styles from "./RoutineCard.module.scss";
import {  SquarePen} from "lucide-react";

interface RoutineCardProps {
  routine: Routine;
  onToggle: (id: string) => void;
  onUpdate: (updatedRoutine: Routine) => void;
}

export default function RoutineCard({ routine, onToggle, onUpdate }: RoutineCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Routine>(routine);

  // Guardar cambios y cerrar desplegable
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(formData);
    setIsEditing(false);
  };

  // Cancelar y volver a los valores originales
  const handleCancel = () => {
    setFormData(routine);
    setIsEditing(false);
  };

  // Manejar cambio en ejercicios
  const handleExerciseChange = (index: number, newName: string) => {
    const updatedExercises = [...(formData.exercises || [])];
    updatedExercises[index] = { ...updatedExercises[index], name: newName };
    setFormData({ ...formData, exercises: updatedExercises });
  };

  return (
    <div className={`${styles.card} ${routine.completed ? styles.completed : ''}`}>
      <div className={styles.dayContainer}>
        <h3 className={styles.day}>{routine.day}</h3>
        
        <div className={styles.actionsHeader}>
          <button 
            type="button" 
            className={styles.editBtn} 
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Cerrar' : <SquarePen/>}
          </button>
          
          <div className={styles.checkboxContainer}>
            <input 
              type="checkbox"   
              checked={routine.completed}
              onChange={() => onToggle(routine.id)}
            />
          </div>
        </div>
      </div>

      {/* MODO EDICIÓN (DESPLEGABLE) */}
      {isEditing ? (
        <form onSubmit={handleSave} className={styles.editForm}>
          <label>
            Título:
            <input 
              type="text" 
              value={formData.title} 
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </label>

          <label>
            Descripción:
            <textarea 
              value={formData.description} 
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </label>

          <label>
            Duración (minutos):
            <input 
              type="number" 
              value={formData.durationMinutes} 
              onChange={(e) => setFormData({ ...formData, durationMinutes: Number(e.target.value) })}
            />
          </label>

          <div className={styles.exercisesEdit}>
            <p>Ejercicios:</p>
            {formData.exercises?.map((exercise, index) => (
              <input
                key={exercise.id}
                type="text"
                value={exercise.name}
                onChange={(e) => handleExerciseChange(index, e.target.value)}
              />
            ))}
          </div>

          <div className={styles.formActions}>
            <button type="submit" className={styles.saveBtn}>Guardar</button>
            <button type="button" className={styles.cancelBtn} onClick={handleCancel}>Cancelar</button>
          </div>
        </form>
      ) : (
        /* VISTA NORMAL */
        <>
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
        </>
      )}
    </div>
  );
}