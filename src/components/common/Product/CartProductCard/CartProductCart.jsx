import { Counter, Sum } from "../../../ui";
import { CartProductInfo } from "../CartProductInfo";
import "./style.css";

export const CartProductCard = ({ product }) => {
    return (
        <div className="cart-product-card">
            <div className="cart-product-card__content">
                <div className="cart-product-card__content__image">
                    <img src={product.img} alt="#" />
                </div>
                <div className="cart-product-card__content__info">
                    <CartProductInfo product={product} />
                </div>
            </div>
            <div className="cart-product-card__sum">
                <div className="cart-product-card___sum__counter">
                    <Counter id={product.id} count={product.count} />
                </div>
                <div className="cart-product-card___sum__total">
                    <Sum id={product.id} count={product.count} />
                </div>
            </div>
        </div>
    );
}