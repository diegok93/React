import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let cantidadActual = 0;
        cart.forEach((product) => {
        cantidadActual += product.quantity;
        });
        setQuantity(cantidadActual);
        let totalCarrito = 0;
        cart.forEach((product) => {
        totalCarrito += (product.quantity * product.precio);
        setTotal(totalCarrito);
        });
    }, [cart]);

    const addItem = (product, productQuantity) => {
        if (isInCart(product.id)) {
        const productIndex = cart.findIndex((element => element.id == product.id));
        cart[productIndex].quantity += productQuantity;
        setQuantity(quantity + productQuantity);
        } else {
        setCart([...cart, { ...product, quantity: productQuantity }]);
        setQuantity(quantity + productQuantity);
        }
    };

    const removeItem = (id) => {
        const product = cart.find((product) => product.id === id);
        setCart(cart.filter((product) => product.id !== id));
        setQuantity(quantity - product.quantity)
        setTotal(total - (product.quantity * product.precio));
    };

    const isInCart = (id) => {
        return cart.some((product) => product.id === id);
    };

    const clear = () => {
        setCart([]);
        setQuantity(0);
        setTotal(0)
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, quantity, total }}>
        {children}
        </CartContext.Provider>
    );
    };