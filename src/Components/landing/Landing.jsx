import React from "react";
import Image from "next/image";
import Tecnicas from "./Tecnicas";

const Landing = () => {
  return (
    <>
      <div className="container-landing">
      <section>
         <div>
            <h2>En Arte & Victoria</h2>
            <h3>Elige tu técnica favorita para tu retrato</h3>
            <p>Realizamos retratos en 5 técnicas, Carboncillo y grafito para blanco y negro, lápices de colores, pastel y acrilicos para color.</p>
         </div>
         <div>
            <span className="liner"></span>
            <Image
              src="/images/Logo.png"
              alt="Descripción de la imagen"
              width={65}
              height={45}
            />
            <span className="liner"></span>
         </div>
         <div>
         <Tecnicas/>
         </div>
      </section>
      <section>

      </section>
      </div>
    </>
  );
};

export default Landing;