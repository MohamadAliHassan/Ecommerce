import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { ProductsList } from "../pages/Products/ProductsList";
import { ProductDetail } from "../pages/ProductDetail";
import { Register, Login } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* Individual route in our application */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductsList />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </>
  );
};
