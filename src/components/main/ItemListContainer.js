import React, { useEffect, useState } from "react";
import './main.css';
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

/* https://63f97aca473885d837ce558e.mockapi.io/Cervezas */


const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const {name} = useParams()

  useEffect(()=> {

    const obtenerProductos = async () => {
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
    obtenerProductos();

  },[name]);

  return (
    <>
      {<>
      {loading ? <h1>Cargando...</h1> : 
        <>
          <div><h1>{greeting}</h1></div>
          <ItemList array={productos} />
        </>
        }
        </>
      }
    </>
  )

  };
  
  export default ItemListContainer;