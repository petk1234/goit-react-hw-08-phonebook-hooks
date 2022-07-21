import axios from "axios";
import authActions from "./authActions";
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};
const registerUser = (name, email, password) => (dispatch) => {
  dispatch(authActions.requestRegisterUser());
  axios
    .post("https://connections-api.herokuapp.com/users/signup", {
      name: name,
      email: email,
      password: password,
    })
    .then((data) => {
      console.log(data);
      token.set(data.data.token);
      dispatch(authActions.successRegisterUser(data.data));
    })
    .catch((error) => dispatch(authActions.failureRegisterUser()));
};
const loginUser = (email, password) => (dispatch) => {
  dispatch(authActions.requestLoginUser());
  axios
    .post("https://connections-api.herokuapp.com/users/login", {
      email: email,
      password: password,
    })
    .then((data) => {
      console.log(data.data);
      token.set(data.data.token);
      dispatch(authActions.successLoginUser(data.data));
    })
    .catch((error) => dispatch(authActions.failureLoginUser()));
};

const getCurrentUser = (token_) => (dispatch) => {
  token.set(token_);
  dispatch(authActions.requestCurrentUser());
  axios
    .get("https://connections-api.herokuapp.com/users/current")
    .then((data) => {
      console.log(data.data);
      dispatch(authActions.successCurrentUser(data.data));
    })
    .catch((error) => dispatch(authActions.failureCurrentUser()));
  axios.get();
};

const logoutUser = () => (dispatch) => {
  dispatch(authActions.requestLogoutUser());
  axios
    .post("https://connections-api.herokuapp.com/users/logout")
    .then(() => {
      token.unset();
      dispatch(authActions.successLogoutUser());
    })
    .catch((error) => dispatch(authActions.failureLogoutUser()));
};
export default { registerUser, loginUser, getCurrentUser, logoutUser };