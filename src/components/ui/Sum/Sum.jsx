import { useState,useContext, useEffect } from "react";
import { CartContext } from "../../../pages";
import { RubleIcon } from "../icons";
import "./style.css";

export const Sum = ({ id }) => {
    const [sum, setSum] = useState(0);
    const { cart: products } = useContext(CartContext);
    const getSum = () => {
        if (id) {
            const { count, price} = products.find((product) => product.id === id);
            setSum(+price * +count);
        } else {
            if (products && products.length !== 0) {
                if (products.length > 1) {
                    const sum = products.reduce((acc, product) => {
                        return acc + +product.price * +product.count;
                    }, 0)
                    setSum(sum);
                } else {
                    setSum(+products[0].price * +products[0].count);
                }
            }
        }
    }
    useEffect(() => {
        getSum();
        // eslint-disable-next-line
    }, [products])
    return (
        <div className="sum">
            { sum }
            <RubleIcon fill="#1C1C27"/>
        </div>
    );
}