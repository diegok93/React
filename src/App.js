import React from "react";
/* import Navbar from "./components/header/Navbar" */
import ItemListContainer from "./components/main/ItemListContainer"
import NavbarTW from "./components/header/NavbarTW"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ItemDetailContainer } from "./components/main/ItemDetailContainer"
import Cart from "./components/main/Cart"

function App() {

const titulo = "Encontrá las mejores cervezas"

  return (
    <>
    {/* <Navbar numItems={itemsCarrito} /> */}

    <BrowserRouter>

    <NavbarTW  />
    
    <Routes>
    
    <Route path={'/'} element={<ItemListContainer greeting={titulo}/>} />

    <Route path={'/categories/:name'} element={<ItemListContainer greeting={titulo}/>} /> 

    <Route path={'/product/:id'} element={<ItemDetailContainer greeting={titulo}/>} /> 

    <Route path={'/cart'} element={<Cart />} /> 
    
    
    </Routes>

    </BrowserRouter>

    </>
  )
}

export default App;