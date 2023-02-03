import React from "react";
import Navbar from "./components/header/Navbar"
import Main from "./components/main/Main"

function App() {

  const userName = "Diego"
  const itemsCarrito = 4

  return (
    <>
    <Navbar name={userName} numItems={itemsCarrito} />
  
    <Main />
    

    </>
  )
}

export default App;