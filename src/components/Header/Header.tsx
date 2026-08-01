// components/Header/Header.tsx
'use client';

import { useState, useRef, useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import mockRoutines from "@/data/mockRoutines";
import { Routine } from "@/types/workout";
import styles from "./Header.module.scss";
import {  RotateCcw, Save, Settings } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [routines, setRoutines] = useLocalStorage<Routine[]>("workout_routines", mockRoutines);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Guardar copia de seguridad (Descargar JSON)
  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(routines, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `fitcontrol_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    setIsOpen(false);
  };

  // Restaurar copia de seguridad (Leer JSON subido)
  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsedData = JSON.parse(event.target?.result as string);
        if (Array.isArray(parsedData)) {
          setRoutines(parsedData);
          alert("¡Copia de seguridad restaurada con éxito!");
          window.location.reload(); // Recargamos para refrescar estado en UI
        } else {
          alert("El archivo no tiene el formato correcto.");
        }
      } catch (error) {
        alert("Error al leer el archivo de copia de seguridad.");
      }
    };
    reader.readAsText(file);
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>FitControl</h1>

      <div className={styles.configContainer}>
        <button 
          className={styles.gearBtn} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Configuración"
          title="Configuración"
        >
          <Settings />
        </button>

        {isOpen && (
          <div className={styles.popover}>
            <div className={styles.popoverHeader}>
              <h3>Copia de seguridad</h3>
              <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>✕</button>
            </div>

            <p className={styles.disclaimer}>
              Tus rutinas se guardan en este navegador. Guardá una copia para transferir tus datos a otro dispositivo o restaurarlos si borrás el historial.
            </p>

            <div className={styles.actions}>
              <button className={styles.actionBtn} onClick={handleExport}>
                <Save /> Guardar copia
              </button>

              <button className={styles.actionBtn} onClick={() => fileInputRef.current?.click()}>
                <RotateCcw /> Restaurar copia
              </button>

              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImport} 
                accept=".json" 
                style={{ display: "none" }} 
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}