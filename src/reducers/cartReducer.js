export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cartList: payload.products };
    case "REMOVE_FROM_CART":
      return { ...state, cartList: payload.products };
    case "CLEAR_CART":
      return { ...state, cartList: payload.products, total: payload.total };
    case "UPDATE_PRICE":
      return;
    default:
      throw new Error("Unknown action type. No case found");
  }
};
