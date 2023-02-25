import React from "react";
import { Link } from 'react-router-dom'

const ItemDetail = ({ objeto }) => {
  return (
    <div style={styles.container}>
      <img alt={objeto.nombre} src={objeto.imagen} style={styles.image} />
      <div>
        <h1>{objeto.nombre}</h1>
        <h1>Estilo: {objeto.estilo}</h1>
        <span>{objeto.descripcion}</span>
        <h1>Volumen: {objeto.volumen}cc</h1>
        <h2>Precio: ${objeto.precio}</h2>
        <h2>
          <Link to={'/cart'}>Comprar</Link>
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
    width: "20%",
  },
};