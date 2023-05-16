import { ProductCard } from "../ProductCard";
import "./style.css";

export const ProductList = ({ title, products }) => {
    if (products) {
            return (
                <div className="product-list">
                    <div className="product-list__title">{title}</div>
                    <div className="product-list__content">
                        {products.map(product => <ProductCard key={product.id} product={product} />)}
                    </div>
                    
                </div>
            );
        
        
    }
    return <div>Загрузка...</div>;
}