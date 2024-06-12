import { React, useState } from "react";
import Image from "next/image";
import { Tecnicasdata } from "./items";
import CardProduct from "../cardsProducts/CardProduct";

const Tecnicas = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredCards, setFilteredCards] = useState([]);

  const handleFilter = (category) => {
    if (selectedCategory === category) {
      // Si la categoría seleccionada es la misma, cerramos la vista
      setSelectedCategory(null);
      setFilteredCards([]);
    } else {
      // Filtrar las cards de la categoría seleccionada
      const filtered =
        Tecnicasdata.item.find((cat) => cat.title === category)?.cards || [];
      setFilteredCards(filtered);
      setSelectedCategory(category);
    }
  };

  return (
    <div>
      <div className="techniques">
        {Tecnicasdata.item.map((item) => (
          <div key={item.id}>
            <h2 className="corrida">{item.title}</h2>
            <p className="parrafo">{item.paragraph}</p>
            <Image
              className="img-techniches"
              src={item.image}
              alt="Descripción de la imagen"
              width={200}
              height={250}
            />
            <div >
              {" "}
              <button className="btn-techni" onClick={() => handleFilter(item.title)}>
                {" "}
                {selectedCategory === item.title
                  ? "Cerrar"
                  : "Ver Precios "}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cards-container">
      {selectedCategory && (
        <>
          <h2>{selectedCategory}</h2>
          <div className="filtered-cards">
            {filteredCards.length > 0 ? (
              filteredCards.map((card) => (
                <div>
                  {" "}
                  <CardProduct
                    key={card.id}
                    imagen={card.imagen}
                    titulo={card.titulo}
                    medida={card.medida}
                    precio={card.precio}
                  />
                </div>
              ))
            ) : (
              <p>No hay cards disponibles para esta categoría.</p>
            )}
          </div>
        </>
      )}</div>
    </div>
  );
};

export default Tecnicas;
