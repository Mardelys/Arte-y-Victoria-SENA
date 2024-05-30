'use client';
import {React, useState} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';

import Modal from '../modal/Modal';



const ButtonContact = () => {

const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [formData, setFormData] = useState({
   firstName: '',
   lastName: '',
   email: '',
   phone: '',
   comments: ''
 });
 const [errors, setErrors] = useState({});

 const handleChange = (event) => {
   const { name, value } = event.target;
   setFormData({ ...formData, [name]: value });
 };

 const handleSubmit = async (event) => {
   event.preventDefault();

   // Realizar validaciones simples aquí si es necesario

   try {
     const res = await axios.post('/api/users', formData);
     if (res.data.success) {
        Swal.fire({
           position: "center",
           icon: "success",
           title: "Datos de usuario enviados con exito",
           text:"El artista se pondrá en contacto contigo lo mas pronto posible",
           showConfirmButton: true,
           timer: 3000
         }).then(() => {
            // Cerrar el modal después de mostrar la alerta de éxito
            closeModal(false);
            setFormData({
               nombre: '',
               apellido: '',
               correo: '',
               telefono: '',
               comentarios: '',
             });
         });
     }
   } catch (error) {
     console.error('Error al enviar el formulario:', error);
     if (error.response && error.response.data) {
      Swal.fire({
         icon: "error",
         title: "Oops...",
         text: "Hubo un error al envio de los Datos!",
       });
     }
   }
 };
  return (
    <>
   <button onClick={openModal}>¡Contactanos ya!</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
      <form onSubmit={handleSubmit}>
      <h3>Para mayor información ingrese sus datos</h3>
      <div>
        <label>Nombre:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        {errors.firstName && <p>{errors.firstName}</p>}
      </div>
      <div>
        <label>Apellido:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        {errors.lastName && <p>{errors.lastName}</p>}
      </div>
      <div>
        <label>Correo Electrónico:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Teléfono:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        {errors.phone && <p>{errors.phone}</p>}
      </div>
      <div>
        <label>Comentarios:</label>
        <textarea name="comments" value={formData.comments} onChange={handleChange}></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
      </Modal>
      <style jsx>{`
        button {
          margin: 20px;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default ButtonContact;