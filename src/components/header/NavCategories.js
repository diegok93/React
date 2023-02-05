import React from "react";

const NavCategories = ({name, children}) => { 
    const categories = [
        {id: 0, name: "HOME"},
        {id: 1, name: "PRODUCTOS"},
        {id: 2, name: "CONTACTO"},
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