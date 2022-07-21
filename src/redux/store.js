import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { user, token } from "./auth/authReducers";
import rootReducer from "./auth/authReducers";
// const userReducer = (state = {}, action) => state;
// const rootReducer = combineReducers({
//   //   auth: {
//   user: user,
//   token: token,
//   //   },
// });
const store = configureStore({
  reducer: { auth: rootReducer },
});
export default store;
