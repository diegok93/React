import React, {useContext, useState} from "react";
import {CartContext} from '../../context/CartContext'


const CartForm = () => {

    const { clear } = useContext (CartContext)

    const [nombre, setNombre] = useState ("")
    const [correo, setCorreo] = useState ("")
    const [check, setCheck] = useState (false)


    const handlerSubmit = (e) => {
        e.preventDefault()
        setCheck(true)
        
    }

    const handlerResetear = (e) => {
        clear()
    }


    return (
        <>
    {check == false ?
        <>
        <div>
        <form action="" method="post" enctype="" onSubmit={handlerSubmit}>
                <label><h2>Nombre</h2></label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} id="nombre" placeholder="Escribí acá tu nombre y apellido" />

                <label><h2>E-mail</h2></label>
                <input type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} id="mail" placeholder="Escribí acá tu correo electrónico" />

                <div>
                <button type="submit">Enviar</button>
                </div>
            </form>

        </div>
        </>
        :
        <>
        <div>Gracias por tu compra</div>
        <div>Tu numero de pedido es el # </div>
        <button onClick={handlerResetear}>Realizar una nueva compra</button>
        </>
    }
        
        </>
    )

}

export default CartForm