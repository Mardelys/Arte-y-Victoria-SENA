// database.js
const sqlite3 = require('sqlite3').verbose();

// Conectar a la base de datos (si no existe, se crea automáticamente)
const db = new sqlite3.Database('database.db', (err) => {
  if (err) {
    console.error('Error al abrir la base de datos', err.message);
  } else {
    console.log('Conectado a la base de datos SQLite');
    // Crea una tabla si aún no existe
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstName TEXT,
      lastName TEXT,
      email TEXT,
      phone TEXT,
      comments TEXT
    )`);
  }
});

module.exports = db;

