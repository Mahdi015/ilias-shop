let init = [];

// Load data
if (typeof window !== "undefined") {
  if (localStorage.getItem("wishlist")) {
    init = JSON.parse(localStorage.getItem("wishlist"));
  } else {
    init = [];
  }
}

export const wishlistReducer = (state = init, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return action.payload;
    default:
      return state;
  }
};
