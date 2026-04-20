const { Pool } = require('pg');

// Intentar con Pool en lugar de Client
const pool = new Pool({
  host: '127.0.0.1',
  port: 5432,
  user: 'postgres',
  database: 'postgres',
  password: '', // String vacío
  connectionTimeoutMillis: 5000,
});

async function createDatabase() {
  try {
    console.log('Intentando conectar a PostgreSQL...');
    const client = await pool.connect();
    console.log('Conectado a PostgreSQL');
    
    await client.query('CREATE DATABASE brainsort_db');
    console.log('Base de datos brainsort_db creada exitosamente');
    
    client.release();
    await pool.end();
  } catch (error) {
    if (error.code === '42P04') {
      console.log('La base de datos brainsort_db ya existe');
    } else {
      console.error('Error:', error.message);
    }
    await pool.end();
  }
}

createDatabase();
