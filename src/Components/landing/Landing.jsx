import React from "react";
import Image from "next/image";
import Tecnicas from "./Tecnicas";
import Gallery from "./Gallery";
import ButtonContact from "../buttonContact/ButtonContact";
import { IoCamera } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { LuAlarmCheck } from "react-icons/lu";
import Footer from "../footer/Footer";
const Landing = () => {
  return (
    <>
      <div id="landing" className="container-landing">
      <section className="container-techniques">
         <div>
            <h2 className="corrida title" >En Arte & Victoria</h2>
            <h3 className="corrida">Elige tu técnica favorita para tu retrato</h3>
            <p>Realizamos retratos en 4 técnicas, Carboncillo y grafito para blanco y negro, lápices de colores y acrilicos para color.</p>
         </div>
         <div className="div-span">
            <span className="liner"></span>
            <Image
            className="logo"
              src="/images/Logo.png"
              alt="Descripción de la imagen"
              width={65}
              height={50}
            />
            <span className="liner"></span>
         </div>
         <div  >
            <div id="tecnica" className="tecni"><Tecnicas/></div>
         </div>
      </section>
      <section className="bkg-section"  style={{backgroundImage: 'url(/images/detalle/bkg-section.png)'}}>
         <div id="nosotros" className="div-quality">
            <div >
               <h2 className="title-quality">Calidad y compromiso</h2>
               <p>Lo que nos diferencia es la calidad plástica en cada uno de nuestros retratos junto con un compromiso de satisfacción con el cliente.</p>
            </div>
            <div className="div-3-quality">
               <div className="item-quality">
                  <IoCamera className="icon"/>
                  <h3 className="corrida">Montaje previo para que visualices como va a quedar</h3>
                  <p>Verás como será tu retrato antes incluso de aceptar el presupuesto y antes de que empecemos a trabajar en tu retrato.</p>
               </div>
               <div className="item-quality">
                  <FaCheck className="icon" />
                  <h3 className="corrida">Resultado supervisado por tí en todo momento</h3>
                  <p>Te enviamos la foto del retrato acabado para que lo revises y nos digas posibles mejoras. Solo una vez nos apruebes el resultado te lo enviamos.</p>
               </div>
               <div className="item-quality">
                  <LuAlarmCheck className="icon"/>
                  <h3 className="corrida">Compromiso absoluto con la fecha de entrega</h3>
                  <p>La fecha de entrega es vital para que lo regales en su momento, así que la cumpliremos rigurosamente.</p>
               </div>
            </div>
            
         </div>
         <div className="button-div"><ButtonContact/></div>

      </section>
      <section id="galeria">
         <Gallery/>
      </section>
      <section>
         <Footer/>
      </section>
      </div>
    </>
  );
};

export default Landing;