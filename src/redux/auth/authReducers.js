import { createReducer, isAllOf } from "@reduxjs/toolkit";
import authActions from "./authActions";
import { combineReducers } from "@reduxjs/toolkit";

const initialUser = {
  name: "",
  email: "",
};
const loginRegisterTokenInstructions = (state, { type, payload }) => {
  let myStorage = window.localStorage;
  myStorage.setItem("token", payload.token);
  return payload.token;
};

const user = createReducer(initialUser, {
  [authActions.successRegisterUser]: (state, { type, payload }) => payload.user,
  [authActions.successLoginUser]: (state, { type, payload }) => payload.user,
  [authActions.successCurrentUser]: (state, { type, payload }) => ({
    email: payload.email,
    name: payload.name,
  }),
  [authActions.successLogoutUser]: (state) => initialUser,
});
const token = createReducer(null, {
  [authActions.requestRegisterUser]: () => null,
  [authActions.successRegisterUser]: loginRegisterTokenInstructions,
  [authActions.failureRegisterUser]: () => null,
  [authActions.requestLoginUser]: () => null,
  [authActions.successLoginUser]: loginRegisterTokenInstructions,
  [authActions.failureLoginUser]: () => null,
  [authActions.requestCurrentUser]: () => null,
  [authActions.successCurrentUser]: () => {
    let myStorage = window.localStorage;
    return myStorage.getItem("token");
  },
  [authActions.failureCurrentUser]: () => null,
  [authActions.successLogoutUser]: (state) => {
    let myStorage = window.localStorage;
    myStorage.removeItem("token");
    return null;
  },
});
const isLoading = createReducer(false, {
  [authActions.requestLoginUser]: () => true,
  [authActions.requestRegisterUser]: () => true,
  [authActions.requestCurrentUser]: () => true,
  // [authActions.requestLogoutUser]: () => true,

  [authActions.successLoginUser]: () => false,
  [authActions.successRegisterUser]: () => false,
  [authActions.successCurrentUser]: () => false,
  // [authActions.successLogoutUser]: () => false,

  [authActions.failureLoginUser]: () => false,
  [authActions.failureRegisterUser]: () => false,
  [authActions.failureCurrentUser]: () => false,
  // [authActions.failureLogoutUser]: () => false,
});
const error = createReducer("", {
  [authActions.failureLoginUser]: (state, { type, payload }) =>
    "Invalid email or password",
  [authActions.failureRegisterUser]: (state, { type, payload }) =>
    payload.message,
  [authActions.failureLogoutUser]: (state, { type, payload }) =>
    payload.message,
  [authActions.failureCurrentUser]: (state, { type, payload }) =>
    payload.message,
  [authActions.successRegisterUser]: () => "",
  [authActions.successLoginUser]: () => "",
  [authActions.successLogoutUser]: () => "",
  [authActions.successCurrentUser]: () => "",
  [authActions.inputLengthError]: (state, { type, payload }) => payload,
  [authActions.setErrorNull]: () => "",
});
const rootReducer = combineReducers({
  user: user,
  token: token,
  isLoading: isLoading,
  error: error,
});
export default rootReducer;
