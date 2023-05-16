import { useEffect, useState } from "react";
import { ProductList } from "../../components"
import { fetchHeadpnones, fetchWirelessHeadphones } from "../../api"
import "./style.css";

export const ProductPage = () => {
    const [headphones, setHeadpnones] = useState();
    const [wirelessHeadhpnones, setWirelessHeadpnones] = useState();

    useEffect(() => {
        fetchHeadpnones().then(data => setHeadpnones(data));
        fetchWirelessHeadphones().then(data => setWirelessHeadpnones(data));
    }, []);

    return <div className="product-page">
        <ProductList title="Наушники" products={headphones} />
        <ProductList title="Беспроводные наушники" products={wirelessHeadhpnones} />
    </div>
}