import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers";

const cartInitialState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(cartInitialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  function addToCart(product) {
    const updateList = state.cartList.concat(product);

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updateList,
      },
    });
  }

  function removeFromCart(product) {
    //If its euqal, remove otherwise keep it.
    const updatedList = state.cartList.filter((item) => item.id !== product.id);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        product: updatedList,
      },
    });
  }

  function clearCart() {
    dispatch({
      type: "CLEAR_CART",
      payload: {
        product: [],
        total: 0,
      },
    });
  }

  const value = {
    cartList: state.cartList,
    total: state.total,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  return context;
};
