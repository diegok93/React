import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom'
import CartForm from "./CartForm"


const Cart = () => {

    const { cart, removeItem, total } = useContext(CartContext);
    const [form, setForm] = useState (false)

    const handlerForm = () => {
        setForm (true)
    }

    return (
        <>

        <h2>Carrito</h2>

        {total == 0 ? 
            <>
                <div>  
                    <div>
                        <section class="cardHorizontal">
                            <div><p>Carrito Vacío</p></div>
                            <Link className="link" to={'/'}><div><p>Ver Productos</p></div></Link>
                        </section>
                    </div>
                </div>
            </> :
            <>
                {form ?   <div><h1>Resumen de tu pedido:</h1></div>
                    :     <div><h1>Tu Carrito:</h1></div>
            } 
                <div>
                    {cart.map((product) => {
                        return (
                        <section className="cardHorizontal" key={`card-${product.id}`}>
                            <div><p>{product.nombre}</p></div>
                            <div><p>{product.quantity}</p></div>
                            <div><p>X</p></div>
                            <div><p>$ {product.precio}</p></div>
                            {!form && <button id={`button-${product.id}`} onClick={()=>removeItem(product.id)}>Eliminar</button> }
                        </section>
                        )
                    })}
                </div>
                <div>  
                    <div>
                        <section className="cardHorizontal">
                            <div><p>TOTAL:</p></div>
                            <div><p>$ {total}</p></div>
                            <button onClick={handlerForm}>Finalizar Compra</button>
                        </section>
                    </div>
                </div>

                {form && <CartForm />} 
            </>
        
        }
       

    </>

    )

}

export default Cart