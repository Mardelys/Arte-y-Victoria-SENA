// api/users.js
import db from '../../config/database';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, comments } = req.body;

    // Validar datos (puedes utilizar librerías como 'yup' para esto)

    // Insertar en la base de datos
    db.run('INSERT INTO users (firstName, lastName, email, phone, comments) VALUES (?, ?, ?, ?, ?)',
      [firstName, lastName, email, phone, comments], (err) => {
        if (err) {
          console.error('Error al insertar usuario:', err.message);
          return res.status(500).json({ message: 'Error al enviar el formulario' });
        }
        console.log('Usuario insertado correctamente');
        return res.status(200).json({ success: true });
      });
  } else {
    res.status(405).end();
  }
}


