import React from "react";
import './navbar.css';
import logo from "../../assets/logo.jpg";
import NavCategories from "./NavCategories";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Navbar =  ({ numItems }) => {
    
return (
    <>
        <header class="contenedor">
            <img src={logo} alt="Demister Brewing"/>

            <h1>Demister Brewing</h1>

            <NavCategories />

       
        <h3><ShoppingCartIcon color="success" sx={{ fontSize: 40 }} />{numItems}</h3>
      

        </header>
    </>    
    )
}


export default Navbar;

