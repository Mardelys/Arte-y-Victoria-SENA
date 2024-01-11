import React from "react";
import Image from "next/image";
import { Tecnicasdata } from "./items";

const Tecnicas = () => {
  return (
    <div className="techniques">
      {Tecnicasdata.item.map(item => (
        <div  key={item.id}>
          <h2 className="corrida">{item.title}</h2>
          <p>{item.paragraph}</p>
          <Image
            src={item.image}
            alt="Descripción de la imagen"
            width={200}
            height={250}
          />
        </div>
      ))}
    </div>
  );
}

export default Tecnicas;
