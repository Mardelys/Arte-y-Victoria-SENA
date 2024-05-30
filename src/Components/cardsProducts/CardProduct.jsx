// Card.jsx
import React from 'react';
import Image from 'next/image';

const CardProduct = ({ imagen, titulo, medida, precio }) => {
  return (
    <div className="card">
      <Image src={imagen} alt={titulo} width={200} height={250} />
      <h3>{titulo}</h3>
      <p>Medida: {medida}</p>
      <p>Precio: {precio}</p>
    </div>
  );
};

export default CardProduct;
