import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { db } from "../../firebase/firebase"
import { doc, getDoc, collection } from "firebase/firestore"

const ItemDetailContainer = ( ) => {
  
  const [producto, setProducto] = useState([]);
  const [loader, setLoader] = useState(true);
  const {id} = useParams()

  useEffect(()=> {

    const productCollection = collection (db, 'products')
    const consulta = doc(productCollection, id)

    setLoader(true)
    
    getDoc(consulta)
    .then((data) => {
      setProducto ({   
        ...data.data(),
          id: data.id       
        })
      })
      
      .finally(()=>{
        setLoader(false);
      })
      
    

  },[id]);

    return (
        <>
            {loader ? <h2>Cargando...</h2> :
            
            <ItemDetail key={id} objeto={producto} />}
        </>
    )

};

export default ItemDetailContainer

/* const obtenerProductos = async () => {
  try {
    const respuesta = await fetch("https://63f97aca473885d837ce558e.mockapi.io/Cervezas");
    const data = await respuesta.json();
    const filtroCategoria = data.filter((element) => element.id === id);
    id === undefined ? setProducto(data) : setProducto(filtroCategoria);
    setProducto(filtroCategoria)
    setLoading(true);
  } finally {
    setLoading(false);
  }
}
obtenerProductos(); */