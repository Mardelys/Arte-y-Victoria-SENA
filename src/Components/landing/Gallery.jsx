// Carousel.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel
import { Gallerydata } from "./items";

const Gallery = () => {
  return (
    <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
      {Gallerydata.item.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
          <p className="legend">{item.title}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default Gallery;
