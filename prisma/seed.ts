import { PrismaClient, CategoriaAlgoritmo, DificultadEjercicio } from '../generated/prisma';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // 1. Crear administrador por defecto
  const adminPassword = await bcrypt.hash('admin123', 10);
  await prisma.administrador.upsert({
    where: { correo: 'admin@brainsort.edu' },
    update: {},
    create: {
      nombre: 'Admin BrainSort',
      correo: 'admin@brainsort.edu',
      contrasena: adminPassword,
      credencialesAdmin: 'SUPER_ADMIN',
    },
  });

  // 2. Seed de algoritmos de ordenamiento
  const algoritmos = [
    {
      nombre: 'Bubble Sort',
      descripcion: 'Algoritmo de ordenamiento que compara elementos adyacentes e intercambia si están desordenados.',
      dificultad: 'Facil' as const,
      complejidadTiempo: 'O(n²)',
      complejidadEspacio: 'O(1)',
      categoria: 'Ordenamiento' as const,
    },
    {
      nombre: 'Selection Sort',
      descripcion: 'Algoritmo que selecciona el menor elemento y lo coloca en su posición correcta.',
      dificultad: 'Medio' as const,
      complejidadTiempo: 'O(n²)',
      complejidadEspacio: 'O(1)',
      categoria: 'Ordenamiento' as const,
    },
    {
      nombre: 'Insertion Sort',
      descripcion: 'Algoritmo que inserta cada elemento en su posición correcta dentro de la sublista ordenada.',
      dificultad: 'Facil' as const,
      complejidadTiempo: 'O(n²)',
      complejidadEspacio: 'O(1)',
      categoria: 'Ordenamiento' as const,
    },
  ];

  for (const algo of algoritmos) {
    await prisma.algoritmo.upsert({
      where: { nombre: algo.nombre },
      update: algo,
      create: algo,
    });
  }

  // 3. Seed de ejercicios (1 por algoritmo)
  const bubbleSort = await prisma.algoritmo.findUnique({
    where: { nombre: 'Bubble Sort' },
  });
  const selectionSort = await prisma.algoritmo.findUnique({
    where: { nombre: 'Selection Sort' },
  });
  const insertionSort = await prisma.algoritmo.findUnique({
    where: { nombre: 'Insertion Sort' },
  });

  const ejerciciosExistentes = await prisma.ejercicioPrediccion.count();
  if (ejerciciosExistentes === 0) {
    const ejercicios = [
      {
        pregunta:
          'Dado el arreglo [5, 2, 8, 1], ¿cuál es el resultado después de la primera pasada completa de Bubble Sort?',
        respuestaCorrecta: '[2, 5, 1, 8]',
        dificultad: 'Facil' as const,
        feedbackPositivo:
          '¡Correcto! En la primera pasada, Bubble Sort compara pares adyacentes y deja el elemento más grande al final.',
        feedbackNegativo:
          'Incorrecto. Recuerda que Bubble Sort compara pares adyacentes de izquierda a derecha y al final de la pasada el mayor queda al final.',
        algoritmo: { connect: { id: bubbleSort!.id } },
      },
      {
        pregunta:
          'En Selection Sort, dado el arreglo [4, 7, 1, 3], ¿cuál es el primer intercambio que se realiza?',
        respuestaCorrecta: 'Intercambiar 4 con 1',
        dificultad: 'Facil' as const,
        feedbackPositivo:
          '¡Correcto! Selection Sort busca el mínimo de todo el arreglo y lo intercambia con la primera posición.',
        feedbackNegativo:
          'Incorrecto. Selection Sort primero ubica el valor mínimo del arreglo y luego lo intercambia con el primer elemento.',
        algoritmo: { connect: { id: selectionSort!.id } },
      },
      {
        pregunta:
          'En Insertion Sort, dado el arreglo [3, 1, 4, 2], ¿cuál es el estado del arreglo después de insertar el segundo elemento?',
        respuestaCorrecta: '[1, 3, 4, 2]',
        dificultad: 'Facil' as const,
        feedbackPositivo:
          '¡Correcto! Insertion Sort toma el segundo elemento y lo inserta en la posición correcta dentro de la sublista ordenada.',
        feedbackNegativo:
          'Incorrecto. Insertion Sort inserta cada elemento en orden dentro del subarreglo izquierdo ya ordenado.',
        algoritmo: { connect: { id: insertionSort!.id } },
      },
    ];

    for (const ejercicio of ejercicios) {
      await prisma.ejercicioPrediccion.create({ data: ejercicio });
    }
  }

  // Add Merge Sort exercise if it doesn't exist
  const mergeSort = await prisma.algoritmo.findUnique({
    where: { nombre: 'Merge Sort' },
  });

  if (mergeSort) {
    const mergeSortExerciseExists = await prisma.ejercicioPrediccion.findFirst({
      where: {
        algoritmoId: mergeSort.id,
        pregunta: {
          contains: 'Merge Sort',
        },
      },
    });

    if (!mergeSortExerciseExists) {
      await prisma.ejercicioPrediccion.create({
        data: {
          pregunta:
            'En Merge Sort, dado el arreglo [4, 3, 2, 1], ¿cuál es el resultado del primer merge después de dividir el arreglo en mitades?',
          respuestaCorrecta: '[3, 4, 1, 2]',
          dificultad: 'Medio' as const,
          feedbackPositivo:
            '¡Correcto! Merge Sort divide recursivamente y luego combina las mitades ordenadas.',
          feedbackNegativo:
            'Incorrecto. Merge Sort primero divide el arreglo en mitades recursivamente y luego las combina ordenadamente.',
          algoritmo: { connect: { id: mergeSort.id } },
        },
      });
    }
  }

  // 4. Seed de insignias
  const insignias = [
    { nombre: 'Primer Paso', descripcion: 'Completaste tu primera simulación', imagen: '/badges/first-step.svg', criterioDesbloqueo: 'Completar 1 simulación' },
    { nombre: 'Explorador', descripcion: 'Visualizaste 3 algoritmos diferentes', imagen: '/badges/explorer.svg', criterioDesbloqueo: 'Visualizar 3 algoritmos' },
    { nombre: 'Racha de 7', descripcion: 'Estudiaste 7 días consecutivos', imagen: '/badges/streak-7.svg', criterioDesbloqueo: 'rachaDias >= 7' },
    { nombre: 'Maestro del Orden', descripcion: 'Completaste todos los algoritmos de Ordenamiento', imagen: '/badges/sort-master.svg', criterioDesbloqueo: 'Completar todos los algoritmos de Ordenamiento' },
  ];

  for (const badge of insignias) {
    await prisma.insignia.upsert({
      where: { nombre: badge.nombre },
      update: badge,
      create: badge,
    });
  }

  console.log('✅ Seed completado');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
