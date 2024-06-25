import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers";

const filterInitialState = {
  productList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  ratings: null,
};

//Where we make the data accessible throughout the app.
const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
  //In order to use the values, one has to destructure it and call useContext/useFilter.
  const [state, dispatch] = useReducer(filterReducer, filterInitialState);

  function initProductList(products) {
    dispatch({
      type: "PRODUCT_LIST",
      payload: {
        products: products,
      },
    });
  }

  function bestSeller(products) {
    return state.bestSellerOnly
      ? products.filter((product) => product.in_stock === true)
      : products;
  }

  function sort(products) {
    if (state.sortBy === "lowtohigh") {
      return products.sort((a, b) => Number(a.price - Number(b.price)));
    }
    if (state.sortBy === "hightolow") {
      products.sort((a, b) => Number(b.price - Number(a.price)));
    }
    return products;
  }

  function inStock(products) {
    return state.onlyInStock
      ? products.filter((product) => product.in_stock === true)
      : products;
  }

  function rating(products) {
    if (state.ratings === "4STARSABOVE") {
      return products.filter((product) => product.rating >= 4);
    }
    if (state.ratings === "3STARSABOVE") {
      return products.filter((product) => product.rating >= 3);
    }
    if (state.ratings === "2STARSABOVE") {
      return products.filter((product) => product.rating >= 2);
    }
    if (state.ratings === "1STARSABOVE") {
      return products.filter((product) => product.rating >= 1);
    }
    return products;
  }

  //Re-evaluation of our state once the values/states changes according to use preference
  const filteredProducts = rating(sort(inStock(bestSeller(state.productList))));

  const value = {
    state,
    dispatch,
    products: filteredProducts, // Get productList from state
    initProductList,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
