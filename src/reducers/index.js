import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";
import { wishlistReducer } from "./wishlistReducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
});
export default rootReducer;
