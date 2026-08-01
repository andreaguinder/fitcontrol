import { useState, useEffect } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  // 1. Siempre arrancamos con el initialValue para que Servidor y Cliente coincidan
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isMounted, setIsMounted] = useState(false);

  // 2. Apenas el componente se monta en el navegador, leemos el localStorage
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }else {
        // 💡 Si es la primera vez, guarda el mock inicial
        window.localStorage.setItem(key, JSON.stringify(initialValue));
      }
    } catch (error) {
      console.error("Error al leer localStorage:", error);
    }
    setIsMounted(true);
  }, [key]);

  // 3. Cuando cambia el valor, guardamos en localStorage
  useEffect(() => {
    if (isMounted) {
      try {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      } catch (error) {
        console.error("Error al guardar en localStorage:", error);
      }
    }
  }, [key, storedValue, isMounted]);

  return [storedValue, setStoredValue] as const;
};