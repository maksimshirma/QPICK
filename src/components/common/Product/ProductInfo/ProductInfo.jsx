import { useContext } from "react";
import { CartContext } from "../../../../pages/RootLayout";
import { RubleIcon } from "../../../ui";
import "./style.css";

export const ProductInfo = ({ product }) => {
    const { id, title, price, rate } = product;
    const { addToCart } = useContext(CartContext);
    const handleAdd = () => {
        addToCart(id);
    }

    return (
        <div className="product-info">
            <div className="product-info__title">{ title }</div>
            <div className="product-info__price">
                { price }
                <RubleIcon />
            </div>
            <div className="product-info__rate">
                <img src="/images/rate_star.png" alt="#" />
                { rate }
            </div>
            <button className="product-info__buy" onClick={handleAdd}>Купить</button>
        </div>
    );
};