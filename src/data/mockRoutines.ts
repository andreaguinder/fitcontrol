import {Routine} from '@/types/workout';

const mockRoutines: Routine[] = [

    {
    id: "hibrido-lunes",
    title: "Híbrido (Funcional + Aeróbico)",
    description: "Combinación de fuerza funcional con bloque aeróbico para resistencia general.",
    day: "Lunes",
    durationMinutes: 50,
    completed: false,
    exercises: [
      { id: 1, name: "Kettlebell Swings", sets: 4, reps: 15 },
      { id: 2, name: "Sombra / Salto a la soga", sets: 3, reps: 3 } // 3 minutos
    ]
  },
  {
    id: "hiit-martes",
    title: "HIIT Alta Intensidad",
    description: "Intervalos cortos de alta intensidad para quemar y activar el metabolismo.",
    day: "Martes",
    durationMinutes: 30,
    completed: false,
    exercises: [
      { id: 3, name: "Burpees", sets: 4, reps: 12 },
      { id: 4, name: "Mountain Climbers", sets: 4, reps: 30 }
    ]
  },
  {
    id: "hibrido-miercoles",
    title: "Híbrido (Funcional + Aeróbico)",
    description: "Trabajo de zona media, fuerza con peso corporal y cardio de ritmo constante.",
    day: "Miércoles",
    durationMinutes: 50,
    completed: false,
    exercises: [
      { id: 5, name: "Zancadas / Stiff", sets: 3, reps: 12 },
      { id: 6, name: "Remo / Cinta", sets: 1, reps: 20 }
    ]
  },
  {
    id: "hiit-jueves",
    title: "HIIT Tabata",
    description: "Rondas Tabata de 20 segundos de trabajo por 10 de descanso.",
    day: "Jueves",
    durationMinutes: 25,
    completed: false,
    exercises: [
      { id: 7, name: "Jumping Jacks", sets: 8, reps: 20 },
      { id: 8, name: "Squat Jumps", sets: 8, reps: 20 }
    ]
  },
  {
    id: "hibrido-viernes",
    title: "Híbrido (Funcional + Aeróbico)",
    description: "Cierre de semana combinando circuitos de empuje/tracción y remate aeróbico.",
    day: "Viernes",
    durationMinutes: 45,
    completed: false,
    exercises: [
      { id: 9, name: "Push-ups + Flexiones", sets: 3, reps: 10 },
      { id: 10, name: "Bicicleta fija", sets: 1, reps: 15 }
    ]
  },
  {
    id: "descanso-sabado",
    title: "Movilidad & Estiramientos",
    description: "Sesión suave para liberar tensiones y trabajar flexibilidad.",
    day: "Sábado",
    durationMinutes: 20,
    completed: false,
    exercises: [
      { id: 11, name: "Rutina de movilidad articular", sets: 1, reps: 15 }
    ]
  },
  {
    id: "descanso-domingo",
    title: "Descanso Activo",
    description: "Caminata al aire libre o recuperación total para arrancar la semana.",
    day: "Domingo",
    durationMinutes: 30,
    completed: false,
    exercises: [
      { id: 12, name: "Caminata suave", sets: 1, reps: 30 }
    ]
  }
];

export default mockRoutines;