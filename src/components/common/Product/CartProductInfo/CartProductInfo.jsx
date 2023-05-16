// import { useContext } from "react";
// import { CartContext } from "../../../../pages/RootLayout";
import { RubleIcon } from "../../../ui";
import "./style.css";

export const CartProductInfo = ({ product }) => {
    const { price, title } = product;
    return (
        <div className="cart-product-info">
            <div className="cart-product-info__title">{ title }</div>
            <div className="cart-product-info__price">
                { price }
                <RubleIcon fill="#AAAAAA" />
            </div>
        </div>
    );
};