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

  // 2. Seed de algoritmos de ordenamiento (CDR-009: pseudocodigo en formato JSON Array)
  const algoritmos = [
    {
      nombre: 'Bubble Sort',
      descripcion: 'Algoritmo de ordenamiento que compara elementos adyacentes e intercambia si están desordenados.',
      dificultad: 'Facil' as const,
      complejidadTiempo: 'O(n²)',
      complejidadEspacio: 'O(1)',
      categoria: 'Ordenamiento' as const,
      pseudocodigo: [
        { numero: 1, codigo: 'Para i = 0 hasta n-2' },
        { numero: 2, codigo: '  Para j = 0 hasta n-i-2' },
        { numero: 3, codigo: '    Si array[j] > array[j+1]' },
        { numero: 4, codigo: '      Intercambiar array[j] y array[j+1]' },
      ],
      tags: ['Básico', 'Lento', 'In-place', 'Estable'],
    },
    {
      nombre: 'Selection Sort',
      descripcion: 'Algoritmo que selecciona el menor elemento y lo coloca en su posición correcta.',
      dificultad: 'Medio' as const,
      complejidadTiempo: 'O(n²)',
      complejidadEspacio: 'O(1)',
      categoria: 'Ordenamiento' as const,
      pseudocodigo: [
        { numero: 1, codigo: 'Para i = 0 hasta n-1' },
        { numero: 2, codigo: '  minIndex = i' },
        { numero: 3, codigo: '  Para j = i+1 hasta n-1' },
        { numero: 4, codigo: '    Si array[j] < array[minIndex]' },
        { numero: 5, codigo: '      minIndex = j' },
        { numero: 6, codigo: '  Intercambiar array[i] con array[minIndex]' },
      ],
      tags: ['Básico', 'In-place', 'Inestable'],
    },
    {
      nombre: 'Insertion Sort',
      descripcion: 'Algoritmo que inserta cada elemento en su posición correcta dentro de la sublista ordenada.',
      dificultad: 'Facil' as const,
      complejidadTiempo: 'O(n²)',
      complejidadEspacio: 'O(1)',
      categoria: 'Ordenamiento' as const,
      pseudocodigo: [
        { numero: 1, codigo: 'Para i = 1 hasta n-1' },
        { numero: 2, codigo: '  key = array[i]' },
        { numero: 3, codigo: '  j = i - 1' },
        { numero: 4, codigo: '  Mientras j >= 0 y array[j] > key' },
        { numero: 5, codigo: '    array[j+1] = array[j]' },
        { numero: 6, codigo: '    j = j - 1' },
        { numero: 7, codigo: '  array[j+1] = key' },
      ],
      tags: ['Básico', 'Eficiente en Casi Ordenados', 'In-place', 'Estable'],
    },
  ];

  for (const algo of algoritmos) {
    await prisma.algoritmo.upsert({
      where: { nombre: algo.nombre },
      update: algo,
      create: algo,
    });
  }

  // Estructuras Lineales
  const estructurasLineales = [
    {
      nombre: 'Stack',
      descripcion: 'Estructura LIFO (Last In, First Out). El último elemento insertado es el primero en salir. Ideal para manejo de llamadas recursivas, deshacer acciones y evaluación de expresiones.',
      dificultad: 'Facil' as const,
      complejidadTiempo: 'O(1)',
      complejidadEspacio: 'O(n)',
      categoria: 'EstructurasLineales' as const,
      tags: ['LIFO', 'Recursión', 'Fundamental'],
      pseudocodigo: [
        { numero: 1, codigo: 'Estructura Stack:' },
        { numero: 2, codigo: '  push(valor): tope ← tope + 1; pila[tope] ← valor' },
        { numero: 3, codigo: '  peek(): devolver pila[tope]' },
        { numero: 4, codigo: '  isEmpty(): devolver tope == -1' },
        { numero: 5, codigo: '  pop(): guardar pila[tope]; tope ← tope - 1' },
        { numero: 6, codigo: '         devolver valor guardado' },
        { numero: 7, codigo: '  (Stack vacío)' },
      ],
    },
    {
      nombre: 'Queue',
      descripcion: 'Estructura FIFO (First In, First Out). El primer elemento insertado es el primero en salir. Usada en sistemas de colas, BFS y procesamiento por lotes.',
      dificultad: 'Facil' as const,
      complejidadTiempo: 'O(1)',
      complejidadEspacio: 'O(n)',
      categoria: 'EstructurasLineales' as const,
      tags: ['FIFO', 'BFS', 'Fundamental'],
      pseudocodigo: [
        { numero: 1, codigo: 'Estructura Queue:' },
        { numero: 2, codigo: '  enqueue(valor): cola[fin] ← valor; fin ← fin + 1' },
        { numero: 3, codigo: '  front(): devolver cola[inicio]' },
        { numero: 4, codigo: '  isEmpty(): devolver inicio == fin' },
        { numero: 5, codigo: '  dequeue(): guardar cola[inicio]' },
        { numero: 6, codigo: '            inicio ← inicio + 1; devolver guardado' },
        { numero: 7, codigo: '  (Queue vacía)' },
      ],
    },
    {
      nombre: 'Linked List',
      descripcion: 'Estructura lineal donde cada nodo contiene un valor y un puntero al siguiente nodo. Permite inserción y eliminación eficiente en cualquier posición sin necesidad de redimensionar.',
      dificultad: 'Medio' as const,
      complejidadTiempo: 'O(n)',
      complejidadEspacio: 'O(n)',
      categoria: 'EstructurasLineales' as const,
      tags: ['Punteros', 'Dinámico', 'Nodos'],
      pseudocodigo: [
        { numero: 1, codigo: 'Estructura Nodo: valor, siguiente' },
        { numero: 2, codigo: 'insertarAlInicio(valor): nuevoNodo ← Nodo(valor)' },
        { numero: 3, codigo: '  nuevoNodo.siguiente ← cabeza; cabeza ← nuevoNodo' },
        { numero: 4, codigo: 'buscar(valor): actual ← cabeza' },
        { numero: 5, codigo: '  Mientras actual != null:' },
        { numero: 6, codigo: '    Si actual.valor == valor: devolver actual' },
        { numero: 7, codigo: '    actual ← actual.siguiente' },
      ],
    },
  ];

  for (const algo of estructurasLineales) {
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

  // Ejercicios de Estructuras Lineales
  const stackAlgo = await prisma.algoritmo.findUnique({ where: { nombre: 'Stack' } });
  const queueAlgo = await prisma.algoritmo.findUnique({ where: { nombre: 'Queue' } });
  const linkedListAlgo = await prisma.algoritmo.findUnique({ where: { nombre: 'Linked List' } });

  if (stackAlgo) {
    const exists = await prisma.ejercicioPrediccion.findFirst({ where: { algoritmoId: stackAlgo.id } });
    if (!exists) {
      await prisma.ejercicioPrediccion.create({
        data: {
          pregunta: 'Si se realizan las operaciones push(1), push(2), push(3), pop(), ¿qué valor retorna pop()?',
          respuestaCorrecta: '3',
          dificultad: 'Facil' as const,
          feedbackPositivo: '¡Correcto! El Stack es LIFO: el último en entrar (3) es el primero en salir.',
          feedbackNegativo: 'Incorrecto. Recuerda: Stack es LIFO. El último elemento insertado (3) es el primero en ser extraído con pop().',
          algoritmo: { connect: { id: stackAlgo.id } },
        },
      });
    }
  }

  if (queueAlgo) {
    const exists = await prisma.ejercicioPrediccion.findFirst({ where: { algoritmoId: queueAlgo.id } });
    if (!exists) {
      await prisma.ejercicioPrediccion.create({
        data: {
          pregunta: 'Si se realizan enqueue(A), enqueue(B), enqueue(C), dequeue(), ¿qué elemento sale?',
          respuestaCorrecta: 'A',
          dificultad: 'Facil' as const,
          feedbackPositivo: '¡Correcto! La Queue es FIFO: el primer elemento encolado (A) es el primero en salir con dequeue().',
          feedbackNegativo: 'Incorrecto. La Queue es FIFO (First In, First Out). El elemento A fue el primero en entrar y será el primero en salir.',
          algoritmo: { connect: { id: queueAlgo.id } },
        },
      });
    }
  }

  if (linkedListAlgo) {
    const exists = await prisma.ejercicioPrediccion.findFirst({ where: { algoritmoId: linkedListAlgo.id } });
    if (!exists) {
      await prisma.ejercicioPrediccion.create({
        data: {
          pregunta: 'En una Lista Enlazada, si insertamos al inicio los valores 1, 2, 3 (en ese orden), ¿cuál es la cabeza (head) resultante?',
          respuestaCorrecta: '3',
          dificultad: 'Medio' as const,
          feedbackPositivo: '¡Correcto! Al insertar al inicio, cada nuevo elemento se convierte en la nueva cabeza. El último insertado (3) es la cabeza.',
          feedbackNegativo: 'Incorrecto. Al insertar al inicio (prepend), el nuevo nodo se coloca antes del nodo anterior. El orden quedará 3 → 2 → 1, siendo 3 la cabeza.',
          algoritmo: { connect: { id: linkedListAlgo.id } },
        },
      });
    }
  }

  // 5. Seed de Preguntas Diagnóstico (incluyendo estructuras lineales)
  const preguntasDiagnostico = await prisma.preguntaDiagnostico.count();
  if (preguntasDiagnostico === 0) {
    const preguntas = [
      {
        pregunta: '¿Cuál es el tiempo de complejidad promedio de Bubble Sort?',
        opciones: ['O(n)', 'O(n log n)', 'O(n²)', 'O(1)'],
        indiceCorrecto: 2,
      },
      {
        pregunta: '¿Qué algoritmo utiliza la técnica "Divide y Vencerás"?',
        opciones: ['Insertion Sort', 'Merge Sort', 'Selection Sort', 'Bubble Sort'],
        indiceCorrecto: 1,
      },
      {
        pregunta: '¿Qué significa que un algoritmo de ordenamiento sea "Estable"?',
        opciones: [
          'Nunca arroja errores durante la ejecución.',
          'El tiempo de ejecución siempre es el mismo.',
          'Mantiene el orden relativo de elementos con claves iguales.',
          'Utiliza O(1) de memoria extra.'
        ],
        indiceCorrecto: 2,
      },
      {
        pregunta: '¿Qué principio sigue una estructura tipo Stack?',
        opciones: ['FIFO', 'LIFO', 'Aleatorio', 'Ordenado'],
        indiceCorrecto: 1,
      },
      {
        pregunta: '¿Cuál es la diferencia principal entre un Stack y una Queue?',
        opciones: [
          'El Stack usa más memoria que la Queue.',
          'La Queue es más rápida que el Stack.',
          'En un Stack, el último en entrar es el primero en salir; en una Queue, el primero en entrar es el primero en salir.',
          'No hay diferencia entre ambas estructuras.'
        ],
        indiceCorrecto: 2,
      },
      {
        pregunta: '¿Qué ventaja tiene una Lista Enlazada sobre un arreglo?',
        opciones: [
          'Acceso más rápido por índice.',
          'Menor uso de memoria por elemento.',
          'Inserción y eliminación eficiente sin necesidad de redimensionar.',
          'Búsqueda binaria disponible de forma nativa.'
        ],
        indiceCorrecto: 2,
      },
    ];

    for (const p of preguntas) {
      await prisma.preguntaDiagnostico.create({ data: p });
    }
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
