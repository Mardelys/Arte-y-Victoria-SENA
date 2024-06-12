import React from 'react';
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Desarrollado por Team developer Ana y Mardelys</p>
        <p>Servicio Nacional de Aprendizaje ADSO</p>
      </div>
      <div className="footer-right">
      <Image
              src="/images/Logo.png"
              alt="Descripción de la imagen"
              width={120}
              height={100}
            />
      </div>
    </footer>
  );
}

export default Footer;
