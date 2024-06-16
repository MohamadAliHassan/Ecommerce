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

  const value = {
    products: state.productList, // Get productList from state
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
