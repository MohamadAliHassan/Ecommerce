import React from "react";
import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";

export const CartPage = () => {
  const cartListLenght = 0;
  return <main>{cartListLenght ? <CartList /> : <CartEmpty />}</main>;
};
