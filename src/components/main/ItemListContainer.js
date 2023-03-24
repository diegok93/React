import React, { useEffect, useState } from "react";
import './main.css';
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"


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
      {loader ? <h2>Cargando...</h2> : 
        <>
          <div><h1>{greeting}</h1></div>
          <div><h2>{name}</h2></div>
          <ItemList array={productos} />
        </>
        }
        </>
      }
    </>
  )

  };
  
  export default ItemListContainer;

