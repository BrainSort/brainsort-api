import { PrismaClient } from '../generated/prisma';
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
      complejidadTiempo: 'O(n²)',
      complejidadEspacio: 'O(1)',
      pseudocodigo: `PARA i = 0 HASTA n-1
  PARA j = 0 HASTA n-i-1
    SI arreglo[j] > arreglo[j+1]
      INTERCAMBIAR(arreglo[j], arreglo[j+1])`,
      categoria: 'Ordenamiento',
    },
    {
      nombre: 'Selection Sort',
      descripcion: 'Algoritmo que selecciona el menor elemento y lo coloca en su posición correcta.',
      complejidadTiempo: 'O(n²)',
      complejidadEspacio: 'O(1)',
      pseudocodigo: `PARA i = 0 HASTA n-1
  minIdx = i
  PARA j = i+1 HASTA n
    SI arreglo[j] < arreglo[minIdx]
      minIdx = j
  INTERCAMBIAR(arreglo[i], arreglo[minIdx])`,
      categoria: 'Ordenamiento',
    },
    {
      nombre: 'Insertion Sort',
      descripcion: 'Algoritmo que inserta cada elemento en su posición correcta dentro de la sublista ordenada.',
      complejidadTiempo: 'O(n²)',
      complejidadEspacio: 'O(1)',
      pseudocodigo: `PARA i = 1 HASTA n
  clave = arreglo[i]
  j = i - 1
  MIENTRAS j >= 0 Y arreglo[j] > clave
    arreglo[j+1] = arreglo[j]
    j = j - 1
  arreglo[j+1] = clave`,
      categoria: 'Ordenamiento',
    },
  ];

  for (const algo of algoritmos) {
    // @ts-ignore
    await prisma.algoritmo.upsert({
      where: { nombre: algo.nombre },
      update: algo as any,
      create: algo as any,
    });
  }

  // 3. Seed de insignias
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
