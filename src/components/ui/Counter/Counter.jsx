import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../../pages";
import "./style.css";

export const Counter = ({ id, count }) => {
    const [value, setValue] = useState(count);
    const { addToCart, deleteFromCart } = useContext(CartContext);
    const handleAdd = () => {
        addToCart(id);
        setValue(prevState => +prevState + 1);
    }
    const handleDelete = () => {
        deleteFromCart(id);
        setValue(prevState => +prevState - 1);
    }
    return (
        <div className="counter">
            <div className="counter__minus" onClick={handleDelete}>-</div>
            <div className="counter__count">{ value }</div>
            <div className="counter__plus" onClick={handleAdd}>+</div>
        </div>
    );
}