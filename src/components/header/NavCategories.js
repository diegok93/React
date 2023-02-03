import React from "react";

const NavCategories = ({name, children}) => { 
    const categories = [
        {id: 0, name: "Home"},
        {id: 1, name: "Productos"},
        {id: 2, name: "Contacto"},
        {id: 3, name: "FAQ"},
    ];

    return (
        <nav>
            {categories.map((category) => {
            return (
            <a key={category.id} href="./">
                {category.name}
            </a>
            );
            })}
        </nav>
        )
    }

export default NavCategories