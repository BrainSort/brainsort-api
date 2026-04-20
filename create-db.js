const { Client } = require('pg');

// Usar credenciales de Docker
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'brainsort',
  password: 'brainsort_password',
  database: 'postgres',
});

async function createDatabase() {
  try {
    await client.connect();
    console.log('Conectado a PostgreSQL');
    
    await client.query('CREATE DATABASE brainsort_db');
    console.log('Base de datos brainsort_db creada exitosamente');
    
    await client.end();
  } catch (error) {
    if (error.code === '42P04') {
      console.log('La base de datos brainsort_db ya existe');
    } else {
      console.error('Error:', error.message);
    }
    await client.end();
  }
}

createDatabase();
