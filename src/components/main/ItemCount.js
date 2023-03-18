import React, { useState } from 'react';

const ItemCount = ({onAdd, stock = 10}) => {

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
                <button onClick={()=> restarProducto()}>-</button>
                <h2>{count}</h2>
                <button onClick={()=> sumarProducto()}>+</button>
                <button onClick={()=> onAdd(count)}>Agregar al carrito</button>
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