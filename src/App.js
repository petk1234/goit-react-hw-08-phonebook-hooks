import routes from "./components/routes";
import { useEffect, useTransition } from "react";
import { useSelector, useDispatch } from "react-redux";
import authOperations from "./redux/auth/authOperations";
import PrivateRoute from "./PrivateRoute";
import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "./RestrictedRoute";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./appStyles.module.scss";
import React, { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./components/home/HomePage"));
const LoginPage = lazy(() => import("./components/login/LoginPage"));
const RegisterPage = lazy(() => import("./components/register/RegisterPage"));
const ContactsPage = lazy(() => import("./components/contacts/ContactsPage"));
const Header = lazy(() => import("./components/header/Header"));
const Loader = lazy(() => import("./components/loader/Loader"));
const Error = lazy(() => import("./components/error/Error"));
const UserPage = lazy(() => import("./components/userPage/UserPage"));
function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    let myStorage = window.localStorage;
    if (myStorage.getItem("token") !== null) {
      dispatch(authOperations.getCurrentUser(myStorage.getItem("token")));
    }
  }, []);
  return (
    <div className={styles.appContainer}>
      <Header token={token} />
      <Error />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path={`${routes.home}`}
              element={
                <RestrictedRoute>
                  {" "}
                  <HomePage />
                </RestrictedRoute>
              }
            ></Route>
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
            <Route
              path={routes.profile}
              element={
                <PrivateRoute>
                  <UserPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
