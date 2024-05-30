import React from "react";
import Image from "next/image";
import Tecnicas from "./Tecnicas";
import Gallery from "./Gallery";

const Landing = () => {
  return (
    <>
      <div className="container-landing">
      <section className="container-techniques">
         <div>
            <h2 className="corrida">En Arte & Victoria</h2>
            <h3 className="corrida">Elige tu técnica favorita para tu retrato</h3>
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
         <div  >
            <div className="tecni"><Tecnicas/></div>
         </div>
      </section>
      <section>
         <div>
            <div>
               <h2>Calidad y compromiso</h2>
               <p>Lo que nos diferencia es la calidad plástica en cada uno de nuestros retratos junto con un compromiso de satisfacción con el cliente.</p>
            </div>
            <div>
               <div>
                  //icono
                  <h3 className="corrida">Montaje previo para que visualices como va a quedar</h3>
                  <p>Verás como será tu retrato antes incluso de aceptar el presupuesto y antes de que empecemos a trabajar en tu retrato.</p>
               </div>
               <div>
                  //icono
                  <h3 className="corrida">Resultado supervisado por tí en todo momento</h3>
                  <p>Te enviamos la foto del retrato acabado para que lo revises y nos digas posibles mejoras. Solo una vez nos apruebes el resultado te lo enviamos.</p>
               </div>
               <div>
                  //icono
                  <h3 className="corrida">Compromiso absoluto con la fecha de entrega</h3>
                  <p>La fecha de entrega es vital para que lo regales en su momento, así que la cumpliremos rigurosamente.</p>
               </div>
            </div>
         </div>
      </section>
      <section>
         <h2>Galería</h2>
         <Gallery/>
      </section>
      </div>
    </>
  );
};

export default Landing;