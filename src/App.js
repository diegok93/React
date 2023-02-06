import React from "react";
/* import Navbar from "./components/header/Navbar" */
import ItemListContainer from "./components/main/ItemListContainer"
import NavbarTW from "./components/header/NavbarTW"
function App() {

const titulo = "Encontrá las mejores cervezas"

  return (
    <>
    {/* <Navbar numItems={itemsCarrito} /> */}
    <NavbarTW  />
    
    <ItemListContainer texto={titulo}/>
    

    </>
  )
}

export default App;