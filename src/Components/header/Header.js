import React from 'react';
import Image from 'next/image';

const Header = () => {
   return (

      <div className='image-header'>
         <div>
           

         <Image
        src="/images/Logo.png"  
        alt="Descripción de la imagen"
        width={250} 
        height={200} 
      />
         </div>
         <nav>
            <a>Inicio</a>
            <a>Técnicas</a>
            <a>Productos</a>
            <a>Contacto</a>
            <a>Galeria</a>
            
         </nav>
         <a>Carrito</a>
       <h1>Hola, soy MiComponente</h1>
       <p>Este es un componente simple en Next.js</p>
     </div>
     
   );
 };
 
 export default Header;



