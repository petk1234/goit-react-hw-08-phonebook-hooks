import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import RegisterPage from "./components/register/RegisterPage";
import ContactsPage from "./components/contacts/ContactsPage";
import Header from "./components/header/Header";
import Loader from "./components/loader/Loader";
import AuthError from "./components/error/AuthError";

import routes from "./components/routes";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import authOperations from "./redux/auth/authOperations";
import PrivateRoute from "./PrivateRoute";

import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "./RestrictedRoute";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./appStyles.module.scss";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const isLoading = useSelector((state) => state.auth.isLoading);
  useEffect(() => {
    let myStorage = window.localStorage;
    console.log(myStorage.getItem("token"));
    if (myStorage.getItem("token") !== null) {
      dispatch(authOperations.getCurrentUser(myStorage.getItem("token")));
    }
  }, []);
  return (
    <div className={styles.appContainer}>
      <Header token={token} />
      <AuthError />
      <main>
        {isLoading === false ? (
          <Routes>
            <Route path={`${routes.home}`} element={<HomePage />}></Route>
            <Route
              path={`${routes.login}`}
              element={
                <RestrictedRoute>
                  <LoginPage />
                </RestrictedRoute>
              }
            ></Route>
            <Route
              path={`${routes.register}`}
              element={
                <RestrictedRoute>
                  <RegisterPage />
                </RestrictedRoute>
              }
            ></Route>
            <Route
              path={`${routes.contacts}`}
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        ) : (
          <Loader />
        )}
      </main>
    </div>
  );
}

export default App;
