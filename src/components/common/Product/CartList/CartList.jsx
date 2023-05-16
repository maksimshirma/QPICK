import { useContext } from "react";
import { CartProductCard } from "../CartProductCard";
import { CartContext } from "../../../../pages";
import "./style.css";

export const CartList = () => {
    const { cart } = useContext(CartContext);

    if (cart) {
        return (
            <div className="cart-list">
                <div className="cart-list__title">Корзина</div>
                <div className="cart-list__content">
                    {cart.map(product => <CartProductCard key={product.id} product={product} />)}
                </div>
                
            </div>
        );
    }
    return <div>Загрузка...</div>;
}