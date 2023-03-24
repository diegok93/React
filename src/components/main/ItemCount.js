import React, { useState } from 'react';

const ItemCount = ({onAdd, stock}) => {

    const [count, setCount] = useState(1);

    const sumarProducto = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const restarProducto = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <>
            <div style={styles.container}>
                <button onClick={()=> restarProducto()} className="button button5"> - </button>
                <h2>{count}</h2>
                <button onClick={()=> sumarProducto()} className="button button5"> + </button>
                <button onClick={()=> onAdd(count)} className="button button2">Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount;

const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "5px"
    },
    image: {
      borderRadius: "5%",
    },
  };