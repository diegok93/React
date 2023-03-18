import React, { useEffect, useState } from "react";
import './main.css';
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"

/* https://63f97aca473885d837ce558e.mockapi.io/Cervezas */


const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loader, setLoader] = useState(true);
  const {name} = useParams()

  useEffect(()=> {

    const productCollection = collection (db, 'products')
    const consulta = name
    ? query(productCollection, where("categoria", "==", name))
    : productCollection;

    setLoader(true)

    getDocs(consulta)
    .then((data) => {
      const lista = data.docs.map((products) => {
        return {
          ...products.data(),
          id: products.id,
        }
      })
      setProductos(lista)
      setLoader(false)
    })
    .catch((err) => {
      console.error(err)
    })

  },[name]);



  return (
    <>
      {<>
      {loader ? <h1>Cargando...</h1> : 
        <>
          <div><h2>{greeting}</h2></div>
          <div><h1>{name}</h1></div>
          <ItemList array={productos} />
        </>
        }
        </>
      }
    </>
  )

  };
  
  export default ItemListContainer;


/*   const obtenerProductos = async () => {
    try {
      const respuesta = await fetch("https://63f97aca473885d837ce558e.mockapi.io/Cervezas");
      const data = await respuesta.json();
      const filtroCategoria = data.filter((element) => element.categoria === name);
      name === undefined ? setProductos(data) : setProductos(filtroCategoria);
      setLoading(true);
    } finally {
      setLoading(false);
    }
  }
  obtenerProductos(); */
