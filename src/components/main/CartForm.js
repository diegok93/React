import React, {useContext, useState} from "react";
import {CartContext} from '../../context/CartContext'
import { db } from "../../firebase/firebase"
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore"


const CartForm = () => {

    const { clear, cart, total } = useContext (CartContext)

    const [nombre, setNombre] = useState ("")
    const [correo, setCorreo] = useState ("")
    const [check, setCheck] = useState (false)
    const [trackNumber, setTrackNumber] = useState ("")


    const handlerSubmit = (e) => {
        e.preventDefault()
        setCheck(true)

        stockReduction();

        const cargarPedido = collection (db, "orders")
        addDoc(
            cargarPedido,
            {
                nombre: nombre,
                correo: correo,
                productos: cart,
                total: total,
                fechaHora: serverTimestamp(),
            }
        )
        .then((cod) => {
            setTrackNumber (cod.id)
          })
        
}

const stockReduction = () => {
    cart.forEach((element) => {
      const documento = doc(db, 'products', element.id)
      if (element.stock < element.quantity) {
        console.log("No hay stock suficiente")
        
      } else {
        updateDoc(documento, {stock: element.stock - element.quantity})
      }
    })
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
                <button type="submit">Confirmar Compra</button>
                </div>
            </form>

        </div>
        </>
        :
        <>
        <div>Gracias por tu compra</div>
        <div>Tu numero de pedido es el # {trackNumber} </div>
        <button onClick={handlerResetear}>Realizar una nueva compra</button>
        </>
    }
        
        </>
    )

}

export default CartForm