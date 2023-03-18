import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import {CartContext} from '../../context/CartContext'

const ItemDetail = ({ objeto }) => {

  const [cantAgregada, setCantAgregada] = useState (false)
  const { addItem } = useContext(CartContext)

  const onAdd = (count) => {
    setCantAgregada(true);
    addItem(objeto, count);
}

  return (
    <div style={styles.container}>
      <img alt={objeto.nombre} src={objeto.imagen} style={styles.image} border="0"/>
      <div>
        <h1>{objeto.nombre}</h1>
        <h1>Estilo: {objeto.estilo}</h1>
        <span>{objeto.descripcion}</span>
        <h1>Volumen: {objeto.volumen}cc</h1>
        <h2>Precio: ${objeto.precio}</h2>
        <h2>

          {
            cantAgregada ? <Link to={'/cart'}>Finalizar Compra</Link>
            :
            <ItemCount onAdd={onAdd} />
          }

          
        </h2>
      </div>
    </div>
  );
};

export default ItemDetail;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: "5%",
  },
};