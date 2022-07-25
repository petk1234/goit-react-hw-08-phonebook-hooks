import { createAction } from "@reduxjs/toolkit";

const requestRegisterUser = createAction("auth/requestRegisterUser");
const successRegisterUser = createAction("auth/successRegisterUser");
const failureRegisterUser = createAction("auth/failureRegisterUser");

const requestLoginUser = createAction("auth/requestLoginUser");
const successLoginUser = createAction("auth/successLoginUser");
const failureLoginUser = createAction("auth/failureLoginUser");

const requestCurrentUser = createAction("auth/requestCurrentUser");
const successCurrentUser = createAction("auth/successCurrentUser");
const failureCurrentUser = createAction("auth/failureCurrentUser");

const requestLogoutUser = createAction("auth/requestLogoutUser");
const successLogoutUser = createAction("auth/successLogoutUser");
const failureLogoutUser = createAction("auth/failureLogoutUser");

const inputLengthError = createAction("auth/inputLengthError");
const setErrorNull = createAction("auth/setErrorNull");
export default {
  requestRegisterUser,
  successRegisterUser,
  failureRegisterUser,

  requestLoginUser,
  successLoginUser,
  failureLoginUser,

  requestCurrentUser,
  successCurrentUser,
  failureCurrentUser,

  requestLogoutUser,
  successLogoutUser,
  failureLogoutUser,

  inputLengthError,
  setErrorNull,
};
