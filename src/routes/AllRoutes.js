import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
//export före funktionen wrappas i måsvingar.
import { ProductsList } from "../pages/Products/ProductsList";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* Individual route in our application */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductsList />}></Route>
      </Routes>
    </>
  );
};
