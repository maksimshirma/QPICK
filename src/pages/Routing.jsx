import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { ProductPage } from "./ProductPage";
import { CartPage } from "./CartPage/CartPage";
import { RootLayout } from "./RootLayout";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RootLayout />}>
            <Route path="/" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />}/>
        </Route>
    )
);