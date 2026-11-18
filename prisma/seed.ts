import {
  Prisma,
  PrismaClient,
  CategoriaAlgoritmo,
  DificultadEjercicio,
} from '../generated/prisma';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export type ExerciseSeed = {
  algoritmo: string;
  tipo: 'PrediccionTexto' | 'CompletarPseudocodigo' | 'OrdenarBarras' | 'SecuenciaGrafos';
  pregunta: string;
  respuestaCorrecta: string;
  dificultad: 'Facil' | 'Medio' | 'Dificil';
  feedbackPositivo: string;
  feedbackNegativo: string;
  opciones?: Prisma.InputJsonValue;
  contenido?: Prisma.InputJsonValue;
};

export function getSeedAlgorithmNames(): string[] {
  return [
    'Bubble Sort',
    'Selection Sort',
    'Insertion Sort',
    'Stack',
    'Queue',
    'Linked List',
    'Merge Sort',
    'Quick Sort',
    'Heap Sort',
    'Binary Search',
    'Linear Search',
    'Deque',
    'Priority Queue',
    'Segment Tree',
    'Breadth-First Search',
    'Depth-First Search',
    'Dijkstra',
  ];
}

const visualizationRoles = {
  activo: { color: '#F5A623' },
  intercambio: { color: '#E74C3C' },
  insercion: { color: '#00D4FF' },
  esperaRecursion: { label: 'espera', color: '#6B7280' },
};

function visualizationConfig(nombre: string): Prisma.InputJsonValue {
  const configs: Record<string, Prisma.InputJsonValue> = {
    'Bubble Sort': {
      roles: visualizationRoles,
      lineLabels: { 3: ['j', 'j+1'], 4: ['j', 'j+1'] },
    },
    'Selection Sort': {
      roles: visualizationRoles,
      lineLabels: { 4: ['j', 'min'], 6: ['i', 'min'] },
    },
    'Insertion Sort': {
      roles: visualizationRoles,
      lineLabels: { 3: ['j', 'key'], 4: ['key'], 5: ['key'] },
    },
    'Merge Sort': {
      roles: visualizationRoles,
      lineLabels: {
        10: ['izq[i]', 'der[j]'],
        11: ['k'],
        12: ['k'],
        14: ['k'],
      },
      recursion: { waitingRole: 'esperaRecursion', waitingLabel: 'espera' },
    },
    'Quick Sort': {
      roles: visualizationRoles,
      lineLabels: { 2: ['pivotIndex', 'pivot'], 5: ['j', 'pivot'], 6: ['i', 'j'] },
      recursion: { waitingRole: 'esperaRecursion', waitingLabel: 'espera' },
    },
    'Heap Sort': {
      roles: visualizationRoles,
      lineLabels: { 3: ['root', 'fin'], 4: ['root', 'child'], 5: ['root', 'child'] },
    },
    'Binary Search': {
      roles: visualizationRoles,
      lineLabels: { 3: ['low', 'mid', 'high'], 4: ['mid'], 5: ['low', 'mid', 'high'], 6: ['low', 'mid', 'high'] },
    },
    'Linear Search': {
      roles: visualizationRoles,
      lineLabels: { 2: ['i'], 3: ['i'] },
    },
    'Segment Tree': {
      roles: visualizationRoles,
      lineLabels: {
        1: ['nodo'],
        2: ['hoja'],
        3: ['nodo'],
        4: ['izq'],
        5: ['der'],
        6: ['nodo', 'izq', 'der'],
        7: ['nodo'],
      },
      recursion: { waitingRole: 'esperaRecursion', waitingLabel: 'espera' },
    },
    'Breadth-First Search': {
      roles: {
        ...visualizationRoles,
        visita: { color: '#F5A623', label: 'visitando' },
        frontera: { color: '#00D4FF', label: 'cola' },
      },
      lineLabels: { 3: ['u'], 4: ['v'], 6: ['v'] },
    },
    'Depth-First Search': {
      roles: {
        ...visualizationRoles,
        visita: { color: '#F5A623', label: 'visitando' },
        frontera: { color: '#FF8C00', label: 'pila' },
      },
      lineLabels: { 3: ['u'], 5: ['v'], 6: ['v'] },
    },
    Dijkstra: {
      roles: {
        ...visualizationRoles,
        visita: { color: '#F5A623', label: 'visitando' },
        frontera: { color: '#00D4FF', label: 'cola prioridad' },
        relajacion: { color: '#00D4FF', label: 'relajación' },
      },
      lineLabels: { 4: ['u'], 7: ['v'], 8: ['v'] },
    },
  };

  return configs[nombre] ?? {
    roles: visualizationRoles,
    lineLabels: {},
  };
}

async function ensureExercise(seed: ExerciseSeed) {
  const algoritmo = await prisma.algoritmo.findUnique({
    where: { nombre: seed.algoritmo },
  });

  if (!algoritmo) {
    return;
  }

  const existing = await prisma.ejercicioPrediccion.findFirst({
    where: {
      algoritmoId: algoritmo.id,
      pregunta: seed.pregunta,
    },
  });

  const data = {
    tipo: seed.tipo,
    pregunta: seed.pregunta,
    respuestaCorrecta: seed.respuestaCorrecta,
    dificultad: seed.dificultad,
    feedbackPositivo: seed.feedbackPositivo,
    feedbackNegativo: seed.feedbackNegativo,
    opciones: seed.opciones ?? undefined,
    contenido: seed.contenido ?? undefined,
    algoritmo: { connect: { id: algoritmo.id } },
  };

  if (existing) {
    await prisma.ejercicioPrediccion.update({
      where: { id: existing.id },
      data,
    });
    return;
  }

  await prisma.ejercicioPrediccion.create({ data });
}

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
    const data = { ...algo, visualizacion: visualizationConfig(algo.nombre) };
    await prisma.algoritmo.upsert({
      where: { nombre: algo.nombre },
      update: data,
      create: data,
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
    const data = { ...algo, visualizacion: visualizationConfig(algo.nombre) };
    await prisma.algoritmo.upsert({
      where: { nombre: algo.nombre },
      update: data,
      create: data,
    });
  }

  const algoritmosExpandidos = [
    {
      nombre: 'Merge Sort',
      descripcion: 'Algoritmo divide y vencerás que divide el arreglo en mitades, ordena cada mitad y luego las combina.',
      dificultad: 'Medio' as const,
      complejidadTiempo: 'O(n log n)',
      complejidadEspacio: 'O(n)',
      categoria: 'Ordenamiento' as const,
      tags: ['Divide y Vencerás', 'Estable', 'Recursión'],
      pseudocodigo: [
        { numero: 1, codigo: 'MergeSort(arreglo, L, R)' },
        { numero: 2, codigo: '  Si L == R: retornar' },
        { numero: 3, codigo: '  M = piso((L + R) / 2)' },
        { numero: 4, codigo: '  MergeSort(arreglo, L, M)' },
        { numero: 5, codigo: '  MergeSort(arreglo, M + 1, R)' },
        { numero: 6, codigo: '  Merge(arreglo, L, M, R)' },
        { numero: 7, codigo: '    izq = copia de arreglo[L..M]' },
        { numero: 8, codigo: '    der = copia de arreglo[M+1..R]' },
        { numero: 9, codigo: '    i = 0; j = 0; k = L' },
        { numero: 10, codigo: '    Mientras i < tam(izq) y j < tam(der)' },
        { numero: 11, codigo: '      Si izq[i] <= der[j]: arreglo[k] = izq[i]; i++' },
        { numero: 12, codigo: '      Si no: arreglo[k] = der[j]; j++' },
        { numero: 13, codigo: '      k++' },
        { numero: 14, codigo: '    Copiar sobrantes de izq o der al arreglo' },
      ],
    },
    {
      nombre: 'Quick Sort',
      descripcion: 'Algoritmo divide y vencerás que elige un pivote, particiona valores menores y mayores, y ordena recursivamente.',
      dificultad: 'Dificil' as const,
      complejidadTiempo: 'O(n log n)',
      complejidadEspacio: 'O(log n)',
      categoria: 'Ordenamiento' as const,
      tags: ['Divide y Vencerás', 'Pivote', 'In-place'],
      pseudocodigo: [
        { numero: 1, codigo: 'Si low < high' },
        { numero: 2, codigo: '  pivotIndex = particionar(arreglo, low, high)' },
        { numero: 3, codigo: '  QuickSort(arreglo, low, pivotIndex - 1)' },
        { numero: 4, codigo: '  QuickSort(arreglo, pivotIndex + 1, high)' },
      ],
    },
    {
      nombre: 'Heap Sort',
      descripcion: 'Algoritmo que construye un heap binario y extrae repetidamente el máximo para ordenar el arreglo.',
      dificultad: 'Dificil' as const,
      complejidadTiempo: 'O(n log n)',
      complejidadEspacio: 'O(1)',
      categoria: 'Ordenamiento' as const,
      tags: ['Heap', 'In-place', 'Árbol Binario'],
      pseudocodigo: [
        { numero: 1, codigo: 'Construir max-heap' },
        { numero: 2, codigo: 'Para fin = n-1 hasta 1' },
        { numero: 3, codigo: '  Intercambiar arreglo[0] con arreglo[fin]' },
        { numero: 4, codigo: '  heapify(arreglo, 0, fin)' },
      ],
    },
    {
      nombre: 'Binary Search',
      descripcion: 'Búsqueda eficiente sobre arreglos ordenados que descarta la mitad del espacio de búsqueda en cada paso.',
      dificultad: 'Medio' as const,
      complejidadTiempo: 'O(log n)',
      complejidadEspacio: 'O(1)',
      categoria: 'Busqueda' as const,
      tags: ['Búsqueda', 'Ordenado', 'Divide y Vencerás'],
      pseudocodigo: [
        { numero: 1, codigo: 'low = 0; high = n - 1' },
        { numero: 2, codigo: 'Mientras low <= high' },
        { numero: 3, codigo: '  mid = piso((low + high) / 2)' },
        { numero: 4, codigo: '  Si arreglo[mid] == objetivo: devolver mid' },
        { numero: 5, codigo: '  Si arreglo[mid] < objetivo: low = mid + 1' },
        { numero: 6, codigo: '  Si no: high = mid - 1' },
      ],
    },
    {
      nombre: 'Linear Search',
      descripcion: 'Búsqueda secuencial que revisa cada elemento hasta encontrar el objetivo o llegar al final.',
      dificultad: 'Facil' as const,
      complejidadTiempo: 'O(n)',
      complejidadEspacio: 'O(1)',
      categoria: 'Busqueda' as const,
      tags: ['Búsqueda', 'Secuencial', 'Básico'],
      pseudocodigo: [
        { numero: 1, codigo: 'Para i = 0 hasta n - 1' },
        { numero: 2, codigo: '  Si arreglo[i] == objetivo' },
        { numero: 3, codigo: '    devolver i' },
        { numero: 4, codigo: 'devolver -1' },
      ],
    },
    {
      nombre: 'Deque',
      descripcion: 'Cola doble que permite insertar y eliminar elementos tanto al inicio como al final.',
      dificultad: 'Medio' as const,
      complejidadTiempo: 'O(1)',
      complejidadEspacio: 'O(n)',
      categoria: 'EstructurasLineales' as const,
      tags: ['Doble Cola', 'FIFO', 'LIFO Flexible'],
      pseudocodigo: [
        { numero: 1, codigo: 'pushFront(valor): insertar al inicio' },
        { numero: 2, codigo: 'pushBack(valor): insertar al final' },
        { numero: 3, codigo: 'popFront(): remover del inicio' },
        { numero: 4, codigo: 'popBack(): remover del final' },
      ],
    },
    {
      nombre: 'Priority Queue',
      descripcion: 'Estructura donde cada elemento tiene prioridad y se atiende primero el de mayor prioridad.',
      dificultad: 'Dificil' as const,
      complejidadTiempo: 'O(log n)',
      complejidadEspacio: 'O(n)',
      categoria: 'EstructurasLineales' as const,
      tags: ['Prioridad', 'Heap', 'Planificación'],
      pseudocodigo: [
        { numero: 1, codigo: 'insertar(elemento, prioridad)' },
        { numero: 2, codigo: '  subir hasta mantener prioridad' },
        { numero: 3, codigo: 'extraerMax()' },
        { numero: 4, codigo: '  remover raíz y reordenar heap' },
      ],
    },
    {
      nombre: 'Segment Tree',
      descripcion: 'Estructura de árbol que permite responder consultas de rangos y actualizar valores en O(log n). Es útil para sumas, mínimos o máximos sobre intervalos.',
      dificultad: 'Dificil' as const,
      complejidadTiempo: 'Construcción O(n), consulta O(log n), actualización O(log n)',
      complejidadEspacio: 'O(n)',
      categoria: 'EstructurasArboles' as const,
      tags: ['Árbol', 'Rangos', 'Recursión', 'Consultas'],
      pseudocodigo: [
        { numero: 1, codigo: 'build(nodo, inicio, fin)' },
        { numero: 2, codigo: '  Si inicio == fin: tree[nodo] = arreglo[inicio]' },
        { numero: 3, codigo: '  mid = piso((inicio + fin) / 2)' },
        { numero: 4, codigo: '  build(2*nodo, inicio, mid)' },
        { numero: 5, codigo: '  build(2*nodo+1, mid+1, fin)' },
        { numero: 6, codigo: '  tree[nodo] = tree[2*nodo] + tree[2*nodo+1]' },
        { numero: 7, codigo: '  retornar tree[nodo]' },
      ],
    },
    {
      nombre: 'Breadth-First Search',
      descripcion: 'Recorre un grafo por niveles usando una cola FIFO, explorando todos los vecinos inmediatos antes de descender.',
      dificultad: 'Medio' as const,
      complejidadTiempo: 'O(V + E)',
      complejidadEspacio: 'O(V)',
      categoria: 'Grafos' as const,
      tags: ['Grafos', 'Recorrido', 'BFS', 'Cola'],
      pseudocodigo: [
        { numero: 1, codigo: 'cola = [nodoInicio]; visitados = {nodoInicio}' },
        { numero: 2, codigo: 'Mientras cola no esté vacía:' },
        { numero: 3, codigo: '  u = desencolar()' },
        { numero: 4, codigo: '  Para cada vecino v de u:' },
        { numero: 5, codigo: '    Si v no en visitados:' },
        { numero: 6, codigo: '      visitados.agregar(v); encolar(v)' },
      ],
    },
    {
      nombre: 'Depth-First Search',
      descripcion: 'Recorre un grafo descendiendo lo más profundo posible por cada rama antes de retroceder, usando una pila.',
      dificultad: 'Medio' as const,
      complejidadTiempo: 'O(V + E)',
      complejidadEspacio: 'O(V)',
      categoria: 'Grafos' as const,
      tags: ['Grafos', 'Recorrido', 'DFS', 'Pila'],
      pseudocodigo: [
        { numero: 1, codigo: 'pila = [nodoInicio]; visitados = {}' },
        { numero: 2, codigo: 'Mientras pila no esté vacía:' },
        { numero: 3, codigo: '  u = desapilar()' },
        { numero: 4, codigo: '  Si u no en visitados: visitados.agregar(u)' },
        { numero: 5, codigo: '  Para cada vecino v de u:' },
        { numero: 6, codigo: '    Si v no en visitados: apilar(v)' },
      ],
    },
    {
      nombre: 'Dijkstra',
      descripcion: 'Calcula el camino mínimo desde un nodo origen a todos los demás en un grafo ponderado con pesos no negativos.',
      dificultad: 'Medio' as const,
      complejidadTiempo: 'O((V + E) log V)',
      complejidadEspacio: 'O(V)',
      categoria: 'Grafos' as const,
      tags: ['Grafos', 'Camino Mínimo', 'Dijkstra', 'Cola de Prioridad'],
      pseudocodigo: [
        { numero: 1, codigo: 'dist[s] = 0; dist[v] = ∞ para v ≠ s' },
        { numero: 2, codigo: 'PQ = prioridad([(s, 0)]); visitados = {}' },
        { numero: 3, codigo: 'Mientras PQ no esté vacía:' },
        { numero: 4, codigo: '  u = PQ.extraerMinimo()' },
        { numero: 5, codigo: '  Si u ya en visitados: continuar; visitados.agregar(u)' },
        { numero: 6, codigo: '  Para cada vecino v de u (orden ascendente):' },
        { numero: 7, codigo: '    Si dist[u] + peso(u, v) < dist[v]:' },
        { numero: 8, codigo: '      dist[v] = dist[u] + peso(u, v); PQ.insertar((v, dist[v]))' },
        { numero: 9, codigo: 'Caminos mínimos calculados → FIN' },
      ],
    },
  ];

  for (const algo of algoritmosExpandidos) {
    const data = { ...algo, visualizacion: visualizationConfig(algo.nombre) };
    await prisma.algoritmo.upsert({
      where: { nombre: algo.nombre },
      update: data,
      create: data,
    });
  }

  // 3. Seed de ejercicios gamificados
  const brokenQuestions = [
    'Mueve las barras al estado esperado para: Índices revisados para buscar 8 en [4, 6, 8, 2].',
    'Mueve las barras al estado esperado para: Resultado de push(1), push(2), push(3), pop().',
    'Mueve las barras al estado esperado para: Resultado de enqueue(A), enqueue(B), enqueue(C), dequeue().',
    'Mueve las barras al estado esperado para: Estado tras pushFront(2), pushBack(3), pushFront(1).',
    'Mueve las barras al estado esperado para: Construcción por suma para hojas [2, 1, 5, 3].',
  ];

  const oldBroken = await prisma.ejercicioPrediccion.findMany({
    where: { pregunta: { in: brokenQuestions } },
    select: { id: true },
  });
  if (oldBroken.length > 0) {
    const oldBrokenIds = oldBroken.map((e) => e.id);
    await prisma.respuestaEjercicio.deleteMany({
      where: { ejercicioId: { in: oldBrokenIds } },
    });
    await prisma.ejercicioPrediccion.deleteMany({
      where: { id: { in: oldBrokenIds } },
    });
  }

  for (const seed of getExerciseSeeds()) {
    await ensureExercise(seed);
  }
  // 4. Seed de insignias
  const insignias = [
    {
      nombre: 'Primer Paso',
      descripcion: 'Completaste tu primera simulación',
      imagen: '/badges/first-step.svg',
      criterioDesbloqueo: 'Completar 1 simulación',
      categoria: 'Inicio',
    },
    {
      nombre: 'Explorador',
      descripcion: 'Visualizaste 3 algoritmos diferentes',
      imagen: '/badges/explorer.svg',
      criterioDesbloqueo: 'Visualizar 3 algoritmos',
      categoria: 'Exploración',
    },
    {
      nombre: 'Racha de 7',
      descripcion: 'Estudiaste 7 días consecutivos',
      imagen: '/badges/streak-7.svg',
      criterioDesbloqueo: 'rachaDías >= 7',
      categoria: 'Constancia',
    },
    {
      nombre: 'Maestro del Orden',
      descripcion: 'Completaste todos los algoritmos de Ordenamiento',
      imagen: '/badges/sort-master.svg',
      criterioDesbloqueo: 'Completar todos los algoritmos de Ordenamiento',
      categoria: 'Ordenamiento',
    },
    {
      nombre: 'Organizar es bueno',
      descripcion: 'Dominaste tu primera simulación de Estructura de Datos',
      imagen: '/badges/data-structure-first.svg',
      criterioDesbloqueo: 'Completar 1 simulación de Estructura de Datos',
      categoria: 'Estructuras',
    },
    {
      nombre: 'El comienzo de algo grande',
      descripcion: '¡Encendiste tu primera racha de 1 día!',
      imagen: '/badges/streak-1.svg',
      criterioDesbloqueo: 'rachaDias >= 1',
      categoria: 'Constancia',
    },
  ];

  for (const badge of insignias) {
    await prisma.insignia.upsert({
      where: { nombre: badge.nombre },
      update: badge,
      create: badge,
    });
  }

  // 5. Seed de Preguntas Diagnóstico (incluyendo estructuras lineales y avanzadas)
  await prisma.preguntaDiagnostico.deleteMany();
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
        'Utiliza O(1) de memoria extra.',
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
        'No hay diferencia entre ambas estructuras.',
      ],
      indiceCorrecto: 2,
    },
    {
      pregunta: '¿Qué ventaja tiene una Lista Enlazada sobre un arreglo?',
      opciones: [
        'Acceso más rápido por índice.',
        'Menor uso de memoria por elemento.',
        'Inserción y eliminación eficiente sin necesidad de redimensionar.',
        'Búsqueda binaria disponible de forma nativa.',
      ],
      indiceCorrecto: 2,
    },
    {
      pregunta: '¿Cuál es la complejidad temporal de la Búsqueda Binaria en el peor de los casos?',
      opciones: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
      indiceCorrecto: 1,
    },
    {
      pregunta: '¿Cuál es el propósito principal de un Segment Tree?',
      opciones: [
        'Responder consultas y actualizaciones de rango en O(log n).',
        'Ordenar un arreglo en tiempo lineal.',
        'Estructura para implementar colas LIFO.',
        'Búsqueda secuencial en listas enlazadas.',
      ],
      indiceCorrecto: 0,
    },
  ];

  for (const p of preguntas) {
    await prisma.preguntaDiagnostico.create({ data: p });
  }

  console.log('✅ Seed completado');
}

if (require.main === module) {
  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}


export function getExerciseSeeds(): ExerciseSeed[] {
  const exerciseSeeds: ExerciseSeed[] = [
    {
      algoritmo: 'Bubble Sort',
      tipo: 'CompletarPseudocodigo',
      pregunta: 'Completa la condición central de Bubble Sort.',
      respuestaCorrecta: 'array[j] > array[j + 1]',
      dificultad: 'Facil',
      opciones: ['array[j] > array[j + 1]', 'array[i] < array[j]', 'j < n', 'array[j] == key'],
      contenido: { antes: 'Si ', despues: ': intercambiar array[j] y array[j + 1]' },
      feedbackPositivo: 'Esa comparación detecta pares adyacentes fuera de orden.',
      feedbackNegativo: 'Bubble Sort solo decide intercambiar al comparar dos vecinos.',
    },
    {
      algoritmo: 'Bubble Sort',
      tipo: 'OrdenarBarras',
      pregunta: 'Ordena las barras como quedan tras el primer intercambio de [5, 2, 8, 1].',
      respuestaCorrecta: JSON.stringify([2, 5, 8, 1]),
      dificultad: 'Facil',
      contenido: { inicial: [5, 2, 8, 1], pasoObjetivo: 'Primer intercambio', objetivo: [2, 5, 8, 1] },
      feedbackPositivo: 'Bien: 5 y 2 se intercambian porque están desordenados.',
      feedbackNegativo: 'El primer par comparado es 5 y 2; solo ese par cambia.',
    },
    {
      algoritmo: 'Selection Sort',
      tipo: 'CompletarPseudocodigo',
      pregunta: 'Completa la línea que actualiza el mínimo encontrado.',
      respuestaCorrecta: 'minIndex = j',
      dificultad: 'Medio',
      opciones: ['minIndex = j', 'j = minIndex', 'array[i] = array[j]', 'i = i + 1'],
      contenido: { antes: 'Si array[j] < array[minIndex]: ', despues: '' },
      feedbackPositivo: 'Exacto: guardas la posición del nuevo mínimo.',
      feedbackNegativo: 'No se intercambia todavía; primero se recuerda dónde está el mínimo.',
    },
    {
      algoritmo: 'Selection Sort',
      tipo: 'OrdenarBarras',
      pregunta: 'Acomoda las barras como quedan después de colocar el mínimo de [4, 7, 1, 3].',
      respuestaCorrecta: JSON.stringify([1, 7, 4, 3]),
      dificultad: 'Medio',
      contenido: { inicial: [4, 7, 1, 3], pasoObjetivo: 'Primer mínimo colocado', objetivo: [1, 7, 4, 3] },
      feedbackPositivo: 'Bien: 1 se intercambia con la primera posición.',
      feedbackNegativo: 'Busca el menor de todo el arreglo y cámbialo por el primer elemento.',
    },
    {
      algoritmo: 'Insertion Sort',
      tipo: 'CompletarPseudocodigo',
      pregunta: 'Completa la condición que desplaza elementos mayores que key.',
      respuestaCorrecta: 'j >= 0 y array[j] > key',
      dificultad: 'Medio',
      opciones: ['j >= 0 y array[j] > key', 'i < n y key > 0', 'array[i] < array[j + 1]', 'j == key'],
      contenido: { antes: 'Mientras ', despues: ': array[j + 1] = array[j]' },
      feedbackPositivo: 'Exacto: desplazas mientras haya elementos mayores a la izquierda.',
      feedbackNegativo: 'La clave es comparar key con la parte izquierda ya ordenada.',
    },
    {
      algoritmo: 'Insertion Sort',
      tipo: 'OrdenarBarras',
      pregunta: 'Acomoda las barras tras insertar el 2 en [1, 3, 4, 2].',
      respuestaCorrecta: JSON.stringify([1, 2, 3, 4]),
      dificultad: 'Medio',
      contenido: { inicial: [1, 3, 4, 2], pasoObjetivo: 'Insertar key = 2', objetivo: [1, 2, 3, 4] },
      feedbackPositivo: 'Bien: 2 se coloca entre 1 y 3.',
      feedbackNegativo: 'Mueve 3 y 4 a la derecha para insertar el 2.',
    },
    {
      algoritmo: 'Binary Search',
      tipo: 'CompletarPseudocodigo',
      pregunta: 'En una búsqueda binaria, ¿cómo se calcula el índice del elemento medio (mid)?',
      respuestaCorrecta: 'piso((low + high) / 2)',
      dificultad: 'Facil',
      opciones: [
        'piso((low + high) / 2)',
        'piso((high - low) / 2)',
        'low + (high / 2)',
        'low + high',
      ],
      contenido: { antes: 'mid = ', despues: '' },
      feedbackPositivo: '¡Excelente! Promediar los límites inferior y superior te da el punto medio del rango actual.',
      feedbackNegativo: 'Recuerda que mid es el promedio de low y high redondeado hacia abajo.',
    },
    {
      algoritmo: 'Binary Search',
      tipo: 'OrdenarBarras',
      pregunta: 'Si low = 0 y high = 6 en la primera iteración, selecciona la barra correspondiente al elemento medio (mid).',
      respuestaCorrecta: '3',
      dificultad: 'Facil',
      contenido: {
        modoSeleccion: true,
        inicial: [10, 20, 30, 40, 50, 60, 70],
        pasoObjetivo: 'Con low=0 y high=6, calcula el índice del elemento medio.',
      },
      feedbackPositivo: '¡Correcto! El índice medio es 3, que corresponde al elemento con valor 40.',
      feedbackNegativo: 'Calcula piso((0 + 6) / 2) para encontrar el índice del elemento medio.',
    },
    {
      algoritmo: 'Binary Search',
      tipo: 'CompletarPseudocodigo',
      pregunta: 'Si el elemento en mid es menor que el objetivo, ¿cómo actualizamos el límite inferior (low)?',
      respuestaCorrecta: 'mid + 1',
      dificultad: 'Medio',
      opciones: ['mid + 1', 'mid', 'mid - 1', 'low + 1'],
      contenido: { antes: 'Si arreglo[mid] < objetivo: low = ', despues: '' },
      feedbackPositivo: '¡Correcto! Descartamos la mitad izquierda (incluyendo mid) y comenzamos la búsqueda desde mid + 1.',
      feedbackNegativo: 'Si el valor del medio es menor al objetivo, sabemos que este debe estar a la derecha de mid. Por lo tanto, movemos low justo después de mid.',
    },
    {
      algoritmo: 'Binary Search',
      tipo: 'OrdenarBarras',
      pregunta: 'Buscamos el número 60 en [10, 20, 30, 40, 50, 60, 70]. Si en el primer paso mid es el índice 3 (valor 40), selecciona la barra que será el nuevo límite inferior (low) en el siguiente paso.',
      respuestaCorrecta: '4',
      dificultad: 'Medio',
      contenido: {
        modoSeleccion: true,
        inicial: [10, 20, 30, 40, 50, 60, 70],
        pasoObjetivo: 'Como 40 < 60, actualizamos low = mid + 1.',
      },
      feedbackPositivo: '¡Correcto! Como 40 < 60, el nuevo low se mueve a mid + 1 (índice 4, valor 50).',
      feedbackNegativo: 'Dado que 40 es menor que 60, el elemento debe estar a la derecha de mid. El nuevo límite inferior (low) debe actualizarse a mid + 1.',
    },
    {
      algoritmo: 'Binary Search',
      tipo: 'CompletarPseudocodigo',
      pregunta: 'Si el elemento en mid es mayor que el objetivo, ¿cómo actualizamos el límite superior (high)?',
      respuestaCorrecta: 'mid - 1',
      dificultad: 'Medio',
      opciones: ['mid - 1', 'mid', 'mid + 1', 'high - 1'],
      contenido: { antes: 'Si no: high = ', despues: '' },
      feedbackPositivo: '¡Correcto! Descartamos la mitad derecha (incluyendo mid) moviendo high a mid - 1.',
      feedbackNegativo: 'Si el valor del medio es mayor al objetivo, este debe estar a la izquierda. Movemos high justo antes de mid.',
    },
    {
      algoritmo: 'Binary Search',
      tipo: 'OrdenarBarras',
      pregunta: 'Buscamos el número 20 en [10, 20, 30, 40, 50, 60, 70]. Si en el primer paso mid es el índice 3 (valor 40), selecciona la barra que será el nuevo límite superior (high) en el siguiente paso.',
      respuestaCorrecta: '2',
      dificultad: 'Medio',
      contenido: {
        modoSeleccion: true,
        inicial: [10, 20, 30, 40, 50, 60, 70],
        pasoObjetivo: 'Como 40 > 20, actualizamos high = mid - 1.',
      },
      feedbackPositivo: '¡Correcto! Como 40 > 20, el nuevo high se mueve a mid - 1 (índice 2, valor 30).',
      feedbackNegativo: 'Dado que 40 es mayor que 20, el elemento debe estar a la izquierda de mid. El nuevo límite superior (high) debe actualizarse a mid - 1.',
    },
  ];

  type SelectionOverride = {
    pregunta: string;
    respuestaCorrecta: string;
    inicial: number[];
    pasoObjetivo: string;
    feedbackPositivo: string;
    feedbackNegativo: string;
  };

  const selectionOverrides: Record<string, SelectionOverride> = {
    'Linear Search': {
      pregunta:
        'Buscamos el número 8 en [4, 6, 8, 2] con Linear Search. Selecciona la barra donde se detiene la búsqueda.',
      respuestaCorrecta: '2',
      inicial: [4, 6, 8, 2],
      pasoObjetivo: 'Linear Search revisa 0, 1 y encuentra 8 en el índice 2.',
      feedbackPositivo:
        '¡Correcto! Linear Search avanza índice por índice hasta encontrar el 8 en la posición 2.',
      feedbackNegativo:
        'Recuerda contar desde el índice 0: [4 (0), 6 (1), 8 (2), 2 (3)].',
    },
    Stack: {
      pregunta:
        'En una pila [1, 2, 3] (donde 3 es el tope), selecciona la barra que se extrae al ejecutar pop().',
      respuestaCorrecta: '2',
      inicial: [1, 2, 3],
      pasoObjetivo: 'LIFO: pop() extrae el tope (índice 2, valor 3).',
      feedbackPositivo:
        '¡Exacto! Una pila es LIFO, por lo que pop() extrae el elemento del tope (índice 2, valor 3).',
      feedbackNegativo:
        'En una pila LIFO el último elemento en entrar es el primero en salir (índice 2, valor 3).',
    },
    Queue: {
      pregunta:
        'En una cola [1, 2, 3] (donde 1 está al frente), selecciona la barra que sale primero al ejecutar dequeue().',
      respuestaCorrecta: '0',
      inicial: [1, 2, 3],
      pasoObjetivo: 'FIFO: dequeue() extrae el frente (índice 0, valor 1).',
      feedbackPositivo:
        '¡Correcto! Una cola es FIFO, por lo que dequeue() extrae el primer elemento del frente (índice 0, valor 1).',
      feedbackNegativo:
        'En una cola FIFO el primer elemento en entrar es el primero en salir (índice 0, valor 1).',
    },
    Deque: {
      pregunta:
        'En un Deque [4, 7, 2, 9], selecciona la barra que se extrae al ejecutar popBack().',
      respuestaCorrecta: '3',
      inicial: [4, 7, 2, 9],
      pasoObjetivo:
        'popBack() extrae el elemento del extremo derecho (índice 3, valor 9).',
      feedbackPositivo:
        '¡Muy bien! popBack() remueve el elemento del extremo trasero/derecho (índice 3, valor 9).',
      feedbackNegativo:
        'popBack() opera sobre el extremo derecho del Deque (índice 3, valor 9).',
    },
    'Segment Tree': {
      pregunta:
        'En el Segment Tree por suma [11, 3, 8, 2, 1, 5, 3] (raíz en índice 0), selecciona la barra que representa la suma total del rango [0..3].',
      respuestaCorrecta: '0',
      inicial: [11, 3, 8, 2, 1, 5, 3],
      pasoObjetivo:
        'La raíz (índice 0, valor 11) almacena la suma total 2+1+5+3.',
      feedbackPositivo:
        '¡Excelente! La raíz en el índice 0 acumula la suma total de todo el arreglo (2+1+5+3 = 11).',
      feedbackNegativo:
        'En un Segment Tree indexado desde 0, la raíz (índice 0) guarda el agregado del rango completo [0..3].',
    },
  };

  const moreExerciseSeeds: ExerciseSeed[] = [
    ['Merge Sort', 'Mitades ordenadas de [4, 3, 2, 1]', '[3, 4, 1, 2]', 'Merge(arreglo, izquierda, mitad, derecha)', [4, 3, 2, 1], [3, 4, 1, 2]],
    ['Quick Sort', 'Partición con pivote 3 en [4, 2, 5, 1, 3]', '[2, 1, 3, 4, 5]', 'pivotIndex = particionar(arreglo, low, high)', [4, 2, 5, 1, 3], [2, 1, 3, 4, 5]],
    ['Heap Sort', 'Después de extraer el máximo de [9, 5, 7, 1]', '[7, 5, 1, 9]', 'heapify(arreglo, 0, fin)', [9, 5, 7, 1], [7, 5, 1, 9]],
    ['Linear Search', 'Índices revisados para buscar 8 en [4, 6, 8, 2]', '0, 1, 2', 'Si arreglo[i] == objetivo', [4, 6, 8, 2], [4, 6, 8]],
    ['Stack', 'Resultado de push(1), push(2), push(3), pop()', '3', 'pop(): guardar pila[tope]; tope = tope - 1', [1, 2, 3], [1, 2]],
    ['Queue', 'Resultado de enqueue(A), enqueue(B), enqueue(C), dequeue()', 'A', 'dequeue(): guardar cola[inicio]', [1, 2, 3], [2, 3]],
    ['Linked List', 'Cabeza tras insertar al inicio 1, 2, 3', '3', 'nuevoNodo.siguiente = cabeza; cabeza = nuevoNodo', [1, 2, 3], [3, 2, 1]],
    ['Deque', 'Estado tras pushFront(2), pushBack(3), pushFront(1)', '[1, 2, 3]', 'pushFront(valor): insertar al inicio', [2, 3], [1, 2, 3]],
    ['Priority Queue', 'Orden de atención para prioridades [2, 5, 1]', '[5, 2, 1]', 'extraerMax(): remover raíz y reordenar heap', [2, 5, 1], [5, 2, 1]],
    ['Segment Tree', 'Construcción por suma para hojas [2, 1, 5, 3]', '[11, 3, 8, 2, 1, 5, 3]', 'tree[nodo] = tree[2*nodo] + tree[2*nodo+1]', [2, 1, 5, 3], [11, 3, 8, 2, 1, 5, 3]],
  ].flatMap(([algoritmo, predPregunta, predRespuesta, pseudoRespuesta, inicial, objetivo]) => {
    const algoName = algoritmo as string;
    const dificultad =
      algoName === 'Priority Queue' ||
      algoName === 'Quick Sort' ||
      algoName === 'Heap Sort' ||
      algoName === 'Segment Tree'
        ? ('Dificil' as const)
        : ('Medio' as const);
    const override = selectionOverrides[algoName];

    return [
      {
        algoritmo: algoName,
        tipo: 'CompletarPseudocodigo' as const,
        pregunta: `Completa la línea clave de ${algoName}.`,
        respuestaCorrecta: pseudoRespuesta as string,
        dificultad,
        opciones: [
          pseudoRespuesta,
          'Para i = 0 hasta n - 1',
          'Intercambiar solo si el arreglo ya está ordenado',
          'devolver arreglo sin cambios',
        ],
        contenido:
          algoName === 'Linear Search'
            ? { antes: 'Para i = 0 hasta n - 1: ', despues: ': devolver i' }
            : { antes: '', despues: '' },
        feedbackPositivo: 'Bien: elegiste la línea que captura la decisión central.',
        feedbackNegativo: 'El hueco debe representar la regla que guía el avance del algoritmo.',
      },
      override
        ? {
            algoritmo: algoName,
            tipo: 'OrdenarBarras' as const,
            pregunta: override.pregunta,
            respuestaCorrecta: override.respuestaCorrecta,
            dificultad,
            contenido: {
              modoSeleccion: true,
              inicial: override.inicial,
              pasoObjetivo: override.pasoObjetivo,
            },
            feedbackPositivo: override.feedbackPositivo,
            feedbackNegativo: override.feedbackNegativo,
          }
        : {
            algoritmo: algoName,
            tipo: 'OrdenarBarras' as const,
            pregunta: `Mueve las barras al estado esperado para: ${predPregunta}.`,
            respuestaCorrecta: JSON.stringify(objetivo),
            dificultad,
            contenido: { inicial, pasoObjetivo: predPregunta, objetivo },
            feedbackPositivo: 'Exacto: el estado visual coincide con el paso objetivo.',
            feedbackNegativo: 'Compara qué elementos cambian de posición en ese paso.',
          },
    ];
  });

  const graphExerciseSeeds: ExerciseSeed[] = [
    {
      algoritmo: 'Breadth-First Search',
      tipo: 'CompletarPseudocodigo',
      pregunta: '¿Qué estructura de datos utiliza BFS para explorar los nodos nivel por nivel?',
      respuestaCorrecta: 'Cola (FIFO)',
      dificultad: 'Facil',
      opciones: ['Cola (FIFO)', 'Pila (LIFO)', 'Arreglo estático', 'Árbol binario'],
      contenido: { antes: 'Estructura principal: ', despues: '' },
      feedbackPositivo: '¡Correcto! BFS utiliza una cola FIFO para recorrer los nodos en orden de distancia.',
      feedbackNegativo: 'Recuerda que para explorar primero los nodos más cercanos se necesita una cola FIFO.',
    },
    {
      algoritmo: 'Breadth-First Search',
      tipo: 'SecuenciaGrafos',
      pregunta: 'Dado el grafo con nodos [A, B, C, D] y aristas [A-B, A-C, B-D, C-D], ¿cuál es el orden de visita iniciando en A explorando vecinos en orden alfabético?',
      respuestaCorrecta: JSON.stringify(['A', 'B', 'C', 'D']),
      dificultad: 'Medio',
      contenido: {
        grafo: {
          nodos: ['A', 'B', 'C', 'D'],
          aristas: [['A', 'B'], ['A', 'C'], ['B', 'D'], ['C', 'D']],
          dirigido: false,
        },
        nodoInicio: 'A',
        secuenciaEsperada: ['A', 'B', 'C', 'D'],
      },
      feedbackPositivo: '¡Exacto! Desde A se visitan sus vecinos B y C, y luego se visita D desde la cola.',
      feedbackNegativo: 'Recuerda que BFS visita todos los vecinos directos antes de pasar al siguiente nivel.',
    },
    {
      algoritmo: 'Breadth-First Search',
      tipo: 'SecuenciaGrafos',
      pregunta: 'Dado el grafo estrella con nodos [A, B, C, D, E] donde el nodo central A está conectado a [B, C, D, E], si iniciamos en A y los vecinos se encolan alfabéticamente, ¿cuál es la secuencia completa de visita BFS?',
      respuestaCorrecta: JSON.stringify(['A', 'B', 'C', 'D', 'E']),
      dificultad: 'Facil',
      contenido: {
        grafo: {
          nodos: ['A', 'B', 'C', 'D', 'E'],
          aristas: [['A', 'B'], ['A', 'C'], ['A', 'D'], ['A', 'E']],
          dirigido: false,
        },
        nodoInicio: 'A',
        secuenciaEsperada: ['A', 'B', 'C', 'D', 'E'],
      },
      feedbackPositivo: '¡Exacto! Al estar todos los nodos en el nivel 1 respecto al centro A, BFS los encola y visita en orden alfabético.',
      feedbackNegativo: 'En BFS todos los vecinos directos de la raíz forman el primer nivel y se exploran antes de cualquier nivel subsecuente.',
    },
    {
      algoritmo: 'Breadth-First Search',
      tipo: 'CompletarPseudocodigo',
      pregunta: 'En un grafo no ponderado, ¿qué propiedad asegura BFS respecto a los caminos entre el origen y cualquier otro nodo visitado?',
      respuestaCorrecta: 'Camino con menor número de aristas',
      dificultad: 'Medio',
      opciones: [
        'Camino con menor número de aristas',
        'Camino con mayor cantidad de saltos',
        'Orden topológico inverso',
        'Detección de componentes fuertemente conexas',
      ],
      contenido: { antes: 'Garantía de BFS: Encuentra el ', despues: ' desde el origen.' },
      feedbackPositivo: '¡Correcto! Al avanzar por ondas concéntricas de distancia k, k+1, BFS encuentra la ruta con el menor número de saltos.',
      feedbackNegativo: 'La exploración por niveles garantiza encontrar el camino más corto en cantidad de aristas en grafos no ponderados.',
    },
    {
      algoritmo: 'Depth-First Search',
      tipo: 'CompletarPseudocodigo',
      pregunta: '¿Qué estructura de datos permite implementar DFS de forma iterativa?',
      respuestaCorrecta: 'Pila (LIFO)',
      dificultad: 'Facil',
      opciones: ['Pila (LIFO)', 'Cola (FIFO)', 'Lista circular', 'Cola de prioridad'],
      contenido: { antes: 'Estructura iterativa: ', despues: '' },
      feedbackPositivo: '¡Correcto! Una pila LIFO reproduce el orden del backtracking en profundidad.',
      feedbackNegativo: 'DFS desciende por una rama y retrocede usando una pila LIFO o la pila de llamadas.',
    },
    {
      algoritmo: 'Depth-First Search',
      tipo: 'SecuenciaGrafos',
      pregunta: 'Dado el grafo con nodos [A, B, C, D] y aristas [A-B, B-C, C-D, A-D], ¿cuál es la secuencia de visita en profundidad iniciando en A si se visita primero B?',
      respuestaCorrecta: JSON.stringify(['A', 'B', 'C', 'D']),
      dificultad: 'Medio',
      contenido: {
        grafo: {
          nodos: ['A', 'B', 'C', 'D'],
          aristas: [['A', 'B'], ['B', 'C'], ['C', 'D'], ['A', 'D']],
          dirigido: false,
        },
        nodoInicio: 'A',
        secuenciaEsperada: ['A', 'B', 'C', 'D'],
      },
      feedbackPositivo: '¡Correcto! DFS profundiza por A -> B -> C -> D antes de retroceder.',
      feedbackNegativo: 'DFS sigue la cadena de vecinos hasta que no puede avanzar más profundo.',
    },
    {
      algoritmo: 'Depth-First Search',
      tipo: 'SecuenciaGrafos',
      pregunta: 'Dado el grafo con nodos [A, B, C, D, E] y aristas [A-B, B-C, A-D, D-E], si iniciamos en A y el orden de exploración prioriza B antes que D, ¿cuál es la secuencia DFS completa?',
      respuestaCorrecta: JSON.stringify(['A', 'B', 'C', 'D', 'E']),
      dificultad: 'Medio',
      contenido: {
        grafo: {
          nodos: ['A', 'B', 'C', 'D', 'E'],
          aristas: [['A', 'B'], ['B', 'C'], ['A', 'D'], ['D', 'E']],
          dirigido: false,
        },
        nodoInicio: 'A',
        secuenciaEsperada: ['A', 'B', 'C', 'D', 'E'],
      },
      feedbackPositivo: '¡Muy bien! DFS profundiza primero toda la rama A -> B -> C, hace backtracking hasta A, y luego profundiza por D -> E.',
      feedbackNegativo: 'DFS agota completamente la profundidad de una rama antes de retroceder por backtracking hacia la siguiente rama.',
    },
    {
      algoritmo: 'Depth-First Search',
      tipo: 'CompletarPseudocodigo',
      pregunta: 'En el pseudocódigo de DFS, ¿qué comprobación es indispensable antes de apilar o llamar recursivamente a un vecino v?',
      respuestaCorrecta: 'v no en visitados',
      dificultad: 'Facil',
      opciones: [
        'v no en visitados',
        'v == nodoInicio',
        'cola.tamano() > 0',
        'dist[v] == infinito',
      ],
      contenido: { antes: 'Para cada vecino v de u: Si ', despues: ': visitados.agregar(v); apilar(v)' },
      feedbackPositivo: '¡Exacto! El conjunto de visitados previene ciclos infinitos en grafos con bucles o múltiples caminos.',
      feedbackNegativo: 'Para evitar procesar nodos ya explorados o caer en ciclos infinitos, siempre se valida que v no esté en visitados.',
    },
    {
      algoritmo: 'Dijkstra',
      tipo: 'CompletarPseudocodigo',
      pregunta: '¿Cuál es la condición de relajación en Dijkstra que permite actualizar la distancia mínima hacia un vecino v?',
      respuestaCorrecta: 'dist[u] + peso(u, v) < dist[v]',
      dificultad: 'Medio',
      opciones: [
        'dist[u] + peso(u, v) < dist[v]',
        'dist[u] - peso(u, v) > dist[v]',
        'dist[v] == 0',
        'peso(u, v) < dist[u]',
      ],
      contenido: { antes: 'Si ', despues: ': dist[v] = dist[u] + peso(u, v)' },
      feedbackPositivo: '¡Excelente! Si la distancia acumulada hasta u más el peso de la arista es menor a la distancia conocida hacia v, se actualiza el camino mínimo.',
      feedbackNegativo: 'La regla de relajación de Dijkstra evalúa si transitar por u ofrece un camino más corto hacia v: dist[u] + peso(u, v) < dist[v].',
    },
    {
      algoritmo: 'Dijkstra',
      tipo: 'SecuenciaGrafos',
      pregunta: 'Dado el grafo con nodos [A, B, C, D] y aristas ponderadas A-B (peso 1), A-C (peso 4), B-C (peso 2), C-D (peso 1), ¿cuál es el orden en que Dijkstra visita y confirma definitivamente los nodos iniciando en A?',
      respuestaCorrecta: JSON.stringify(['A', 'B', 'C', 'D']),
      dificultad: 'Dificil',
      contenido: {
        grafo: {
          nodos: ['A', 'B', 'C', 'D'],
          aristas: [['A', 'B'], ['A', 'C'], ['B', 'C'], ['C', 'D']],
          dirigido: false,
          pesos: {
            'A-B': 1,
            'B-A': 1,
            'A-C': 4,
            'C-A': 4,
            'B-C': 2,
            'C-B': 2,
            'C-D': 1,
            'D-C': 1,
          },
        },
        nodoInicio: 'A',
        secuenciaEsperada: ['A', 'B', 'C', 'D'],
      },
      feedbackPositivo: '¡Exacto! Distancias mínimas: A(0), B(1), C(3 por la ruta A-B-C) y D(4 por A-B-C-D). Los nodos se extraen ordenados por su distancia mínima.',
      feedbackNegativo: 'Dijkstra procesa siempre el nodo no visitado con menor distancia acumulada: A (0), luego B (1), luego C (3 vía B) y finalmente D (4 vía C).',
    },
    {
      algoritmo: 'Dijkstra',
      tipo: 'CompletarPseudocodigo',
      pregunta: '¿Qué estructura de datos permite a Dijkstra extraer en O(log V) el nodo no visitado con menor distancia acumulada?',
      respuestaCorrecta: 'Cola de Prioridad (Min-Heap)',
      dificultad: 'Medio',
      opciones: [
        'Cola de Prioridad (Min-Heap)',
        'Pila LIFO',
        'Cola FIFO estándar',
        'Arreglo sin ordenar',
      ],
      contenido: { antes: 'Estructura para extraer distancia mínima: ', despues: '' },
      feedbackPositivo: '¡Correcto! Una Cola de Prioridad basada en Min-Heap extrae el elemento con menor clave en tiempo logarítmico O(log V).',
      feedbackNegativo: 'Dijkstra requiere obtener eficientemente el vértice con menor distancia tentativa, para lo cual la Cola de Prioridad (Min-Heap) es la estructura óptima.',
    },
    {
      algoritmo: 'Dijkstra',
      tipo: 'OrdenarBarras',
      pregunta: 'Tras procesar el nodo origen con dist[A] = 0, las distancias tentativas a los vecinos no visitados son: B: 5, C: 2, D: 8. Selecciona la barra correspondiente al nodo con menor distancia que el algoritmo extraerá en el siguiente paso.',
      respuestaCorrecta: '1',
      dificultad: 'Medio',
      contenido: {
        modoSeleccion: true,
        inicial: [5, 2, 8],
        pasoObjetivo: 'Selecciona la barra del nodo C (distancia 2, índice 1) por ser la mínima tentativa.',
      },
      feedbackPositivo: '¡Bien hecho! Dijkstra es voraz (greedy) y extrae siempre el nodo con menor distancia tentativa (índice 1, valor 2).',
      feedbackNegativo: 'Entre los valores pendientes [5, 2, 8], el menor es 2 en el índice 1.',
    },
  ];
  const extraPedagogicalSeeds: ExerciseSeed[] = [
    {
      algoritmo: 'Bubble Sort',
      tipo: 'PrediccionTexto',
      pregunta: '¿Cuántos intercambios realiza Bubble Sort para ordenar [2, 1, 3]?',
      respuestaCorrecta: '1',
      dificultad: 'Facil',
      feedbackPositivo: '¡Exacto! Solo se intercambia el par (2, 1) y el resto ya está ordenado.',
      feedbackNegativo: 'Revisa los pares adyacentes de [2, 1, 3]: solo 2 y 1 están fuera de orden.',
    },
    {
      algoritmo: 'Selection Sort',
      tipo: 'PrediccionTexto',
      pregunta: 'En Selection Sort sobre [9, 4, 7, 2], ¿qué valor se coloca en el índice 0 tras la primera iteración?',
      respuestaCorrecta: '2',
      dificultad: 'Facil',
      feedbackPositivo: '¡Correcto! Selection Sort busca el mínimo global (2) y lo intercambia al índice 0.',
      feedbackNegativo: 'Selection Sort selecciona el menor de todo el arreglo para colocarlo al inicio.',
    },
    {
      algoritmo: 'Insertion Sort',
      tipo: 'PrediccionTexto',
      pregunta: 'En Insertion Sort sobre [2, 4, 5, 3], ¿cuántos elementos se desplazan a la derecha al insertar el 3?',
      respuestaCorrecta: '2',
      dificultad: 'Medio',
      feedbackPositivo: '¡Bien! Se desplazan el 5 y el 4 para abrir espacio al 3.',
      feedbackNegativo: 'Cuenta cuántos elementos mayores que 3 están a su izquierda: 4 y 5.',
    },
    {
      algoritmo: 'Merge Sort',
      tipo: 'PrediccionTexto',
      pregunta: 'Si Merge Sort divide un arreglo de 8 elementos hasta subarreglos de tamaño 1, ¿cuántos niveles de división se realizan?',
      respuestaCorrecta: '3',
      dificultad: 'Medio',
      feedbackPositivo: '¡Correcto! 8 → 4 → 2 → 1 son log2(8) = 3 niveles de división.',
      feedbackNegativo: 'Divide 8 entre 2 repetidamente hasta llegar a 1: 8→4 (1), 4→2 (2), 2→1 (3).',
    },
    {
      algoritmo: 'Quick Sort',
      tipo: 'PrediccionTexto',
      pregunta: 'En Quick Sort (pivote al final) sobre [3, 8, 2, 5], ¿qué valor se toma como pivote inicial?',
      respuestaCorrecta: '5',
      dificultad: 'Facil',
      feedbackPositivo: '¡Exacto! Con la convención de último elemento, el pivote inicial es 5.',
      feedbackNegativo: 'El pivote al final del arreglo [3, 8, 2, 5] es el último número.',
    },
    {
      algoritmo: 'Heap Sort',
      tipo: 'OrdenarBarras',
      pregunta: 'En el max-heap [9, 6, 7, 2, 4], selecciona la barra que Heap Sort intercambiará con el último elemento en el siguiente paso.',
      respuestaCorrecta: '0',
      dificultad: 'Medio',
      contenido: {
        modoSeleccion: true,
        inicial: [9, 6, 7, 2, 4],
        pasoObjetivo: 'La raíz del max-heap (índice 0, valor 9) se mueve al final del arreglo.',
      },
      feedbackPositivo: '¡Correcto! El máximo siempre está en la raíz (índice 0) y se intercambia con el último elemento.',
      feedbackNegativo: 'En un max-heap, el mayor elemento está en la raíz (índice 0).',
    },
    {
      algoritmo: 'Linear Search',
      tipo: 'PrediccionTexto',
      pregunta: 'En Linear Search sobre [12, 5, 9, 14, 7], ¿cuántas comparaciones se necesitan para encontrar el 9?',
      respuestaCorrecta: '3',
      dificultad: 'Facil',
      feedbackPositivo: '¡Exacto! Compara 12 (1), 5 (2) y 9 (3) para encontrarlo.',
      feedbackNegativo: 'Linear Search evalúa secuencialmente desde el índice 0: 12, 5, 9.',
    },
    {
      algoritmo: 'Stack',
      tipo: 'PrediccionTexto',
      pregunta: 'Tras ejecutar push(4), push(7), pop(), push(2) en una pila vacía, ¿qué valor está en el tope?',
      respuestaCorrecta: '2',
      dificultad: 'Facil',
      feedbackPositivo: '¡Correcto! El último push(2) queda en el tope de la pila.',
      feedbackNegativo: 'push(7) se elimina con pop(), y luego push(2) coloca al 2 en el tope.',
    },
    {
      algoritmo: 'Queue',
      tipo: 'PrediccionTexto',
      pregunta: 'Tras ejecutar enqueue(10), enqueue(20), dequeue(), enqueue(30) en una cola vacía, ¿qué valor está al frente?',
      respuestaCorrecta: '20',
      dificultad: 'Facil',
      feedbackPositivo: '¡Exacto! dequeue() saca al 10 y deja al 20 al frente de la cola.',
      feedbackNegativo: 'En FIFO, dequeue() retira el 10 y el siguiente elemento en llegar (20) queda al frente.',
    },
    {
      algoritmo: 'Linked List',
      tipo: 'OrdenarBarras',
      pregunta: 'En la lista enlazada [15, 8, 23, 4], selecciona la barra que corresponde a la cabeza (head) de la lista.',
      respuestaCorrecta: '0',
      dificultad: 'Facil',
      contenido: {
        modoSeleccion: true,
        inicial: [15, 8, 23, 4],
        pasoObjetivo: 'La cabeza (head) apunta al primer nodo de la lista (índice 0, valor 15).',
      },
      feedbackPositivo: '¡Correcto! La cabeza siempre referencia al primer nodo (índice 0, valor 15).',
      feedbackNegativo: 'El primer nodo de la lista [15, 8, 23, 4] está en el índice 0.',
    },
    {
      algoritmo: 'Deque',
      tipo: 'PrediccionTexto',
      pregunta: 'Tras ejecutar pushBack(5), pushFront(1), pushBack(8) en un Deque vacío, ¿qué valor queda al frente (front)?',
      respuestaCorrecta: '1',
      dificultad: 'Medio',
      feedbackPositivo: '¡Exacto! pushFront(1) inserta al 1 al frente del Deque.',
      feedbackNegativo: 'pushBack(8) agrega al final, por lo que 1 sigue al frente.',
    },
    {
      algoritmo: 'Priority Queue',
      tipo: 'OrdenarBarras',
      pregunta: 'En una cola de prioridad máxima con elementos [3, 9, 5, 1], selecciona la barra del elemento que se extraerá primero con extraerMax().',
      respuestaCorrecta: '1',
      dificultad: 'Facil',
      contenido: {
        modoSeleccion: true,
        inicial: [3, 9, 5, 1],
        pasoObjetivo: 'extraerMax() retira el elemento de mayor prioridad (índice 1, valor 9).',
      },
      feedbackPositivo: '¡Correcto! El valor máximo es 9, ubicado en el índice 1.',
      feedbackNegativo: 'Busca el número más grande en [3, 9, 5, 1] e indica su índice (0..3).',
    },
    {
      algoritmo: 'Segment Tree',
      tipo: 'PrediccionTexto',
      pregunta: 'Para un arreglo de 4 elementos [2, 1, 5, 3], ¿cuántos nodos en total tiene el Segment Tree binario completo (2n - 1)?',
      respuestaCorrecta: '7',
      dificultad: 'Medio',
      feedbackPositivo: '¡Exacto! 4 hojas + 2 nodos internos + 1 raíz = 7 nodos (2×4 - 1).',
      feedbackNegativo: 'Aplica la fórmula 2n - 1 con n = 4.',
    },
  ];

  return [
    ...exerciseSeeds,
    ...moreExerciseSeeds,
    ...graphExerciseSeeds,
    ...extraPedagogicalSeeds,
  ];
}