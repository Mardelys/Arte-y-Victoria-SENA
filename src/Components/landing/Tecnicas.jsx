import React from "react";
import Image from "next/image";



const Tecnicas = ({datos}) => {

  return (
   
   <div>
      {datos.map(item=> (
      <div key={item.id}>
         <h2>{item.title}</h2>
         <p>{item.paragraph}</p>
         <Image
              src={item.image}
              alt="Descripción de la imagen"
              width={200}
              height={250}/>
      </div>
      ))}
      

   </div>
  )
}


export default Tecnicas