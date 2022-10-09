import React, { useContext, useState } from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./itemDetail.css"

// Importamos el hook y el CartContext

function ItemDetail({ item }) {
  
  const [handleEstado, setHandleEstado] = useState(false)

  const handleAddToCart = (count) => {
    alert(`Agregaste al carrito ${count} productos.`)
        setHandleEstado(true)
         }

  return (
    <FlexWrapper rows={true}>
      <div className="main container">
        <h1>{item.title}</h1>
        <img src={item.img} alt={item.title} />
        <h3>$ {item.price}</h3>
      </div>{handleEstado === false ? <ItemCount stock={5} onAddToCart={handleAddToCart} /> : <Link className="link" to="/Cart">Finalizar Compra</Link>}
      
    </FlexWrapper>
  );
}

export default ItemDetail;