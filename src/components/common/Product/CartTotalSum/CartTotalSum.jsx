import { Sum } from "../../../ui";
import "./style.css";

export const CartTotalSum = () => {
    return (
        <div className="cart-total-sum">
            <div className="cart-total-sum__content">
                <Sum />
            </div>
            <div className="cart-total-sum__arrange">
                <button>Перейти к оформлению</button>
            </div>
        </div>
    );
}