import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../pages";
import { FavouritesIcon, CartIcon } from "../icons";
import "./style.css";

export const Navigation = () => {
    const { value } = useContext(CartContext);
    const navigate = useNavigate();
    const navigateToCart = () => {
        navigate("/cart");
    }
    return (
        <div className="navigation">
            <div className="navigation__item">
                <FavouritesIcon />
            </div>
            <div className="navigation__item" onClick={navigateToCart}>
                <CartIcon />
                <div className="navigation__item-counter" hidden={value <= 0}>{value > 0 && value}</div>
            </div>
        </div>
    );
}