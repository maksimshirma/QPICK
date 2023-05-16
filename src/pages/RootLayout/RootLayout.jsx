import React, { useEffect, useState } from 'react';
import { fetchCart } from "../../api";
import { Outlet } from "react-router-dom";
import { Container, Header, Footer } from "../../components";

export const CartContext = React.createContext(null);

export function RootLayout() {
    const [value, setValue] = useState(sessionStorage.length);
    const [cart, setCart] = useState();
    useEffect(() => {
        fetchCart().then(data => setCart(data));
    }, [value])
    const addToCart = (id) => {
        if (sessionStorage.getItem(id) !== null) {
            sessionStorage.setItem(id, +sessionStorage.getItem(id) + 1);
        } else {
            sessionStorage.setItem(id, 1);
            setValue(prevState => prevState + 1);
        }
        fetchCart().then(data => setCart(data));
    }
    const deleteFromCart = (id) => {
        if (+sessionStorage.getItem(id) > 1) {
            sessionStorage.setItem(id, +sessionStorage.getItem(id) - 1);      
        } else {
            sessionStorage.removeItem(id);
            setValue(prevState => prevState - 1);
        }
        fetchCart().then(data => setCart(data));
    }
    return (
        <Container>
            <CartContext.Provider value={{value, cart, addToCart, deleteFromCart }}>
                <Header />
                <Outlet />
                <Footer />
            </CartContext.Provider>
        </Container>
    );
}