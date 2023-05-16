import { ProductInfo } from "../ProductInfo";
import "./style.css";

export const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-card__image">
                <img src={product.img} alt="#" />
            </div>
            <ProductInfo product={product} />
        </div>
    );
}