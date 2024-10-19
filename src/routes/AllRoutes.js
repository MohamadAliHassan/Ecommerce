import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { ProductsList } from "../pages/Products/ProductsList";
import { ProductDetail } from "../pages/ProductDetail";
import { Register, Login, CartPage } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* Individual route in our application */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductsList />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
    </>
  );
};
