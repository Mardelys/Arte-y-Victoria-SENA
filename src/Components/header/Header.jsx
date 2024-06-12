import React from "react";
import Image from "next/image";


const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container-navbar">
          <div>
            <Image
              src="/images/Logo.png"
              alt="Descripción de la imagen"
              width={100}
              height={80}
            />
          </div>
          <nav className="navbar">
            <a href="#landing">Inicio</a>
            <a href="#tecnica">Técnicas</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#galeria">Galeria</a>
          </nav>
          
        </div>
       
        <div>
        <Image className="img-container"
          src="/images/header.png"
          alt="Descripción de la imagen"
          width={1000}
          height={500}
        />
        <div className="title-header">
         <h2>Arte & Victoria</h2>
         <h1>¡ EL MEJOR <br/>REGALO ! </h1>
        </div>
        
        </div>
      </div>
    </>
  );
};

export default Header;
