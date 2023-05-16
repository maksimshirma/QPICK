import { CartList, CartTotalSum } from "../../components";
import "./style.css";


export const CartPage = () => {
    return <div className="cart-page">
        <div className="cart-page__list">
            <CartList />
        </div>
        <div className="cart-page__sum">
            <CartTotalSum />
        </div>
    </div>;
}