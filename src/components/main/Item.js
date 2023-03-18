import React from "react";
import {Link} from 'react-router-dom'

const Item = ({ product }) => {
  return (<>
   

<section className="card" id={product.id}>
<div className="cardImg"><img src={product.imagen} alt={product.descripcion} /></div>
<div className="cardText"><p>{product.nombre}</p></div>
<div className="cardPrice"><p>$ {product.precio}</p></div>
<Link className="link" to={`/product/${product.id}`}><button className="cardCarrito" id={`button-${product.id}`}><p>Ver Detalles</p></button></Link>
</section>


</>
  );
};


export default Item;