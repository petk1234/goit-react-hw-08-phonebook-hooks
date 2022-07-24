import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import RegisterPage from "./components/register/RegisterPage";
import ContactsPage from "./components/contacts/ContactsPage";
import UserMenu from "./components/userMenu/UserMenu";
import NavLinks from "./components/nav/NavLinks";
import routes from "./components/routes";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import authOperations from "./redux/auth/authOperations";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./appStyles.module.scss";
import navLinksStyles from "./components/nav/navLinksStyles.module.scss";
import AuthError from "./components/error/AuthError";
function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    let myStorage = window.localStorage;
    console.log(myStorage.getItem("token"));
    if (myStorage.getItem("token") !== null) {
      dispatch(authOperations.getCurrentUser(myStorage.getItem("token")));
    }
  }, []);
  return (
    <div className={styles.appContainer}>
      <header>
        <div className={styles.headerContainer}>
          <NavLinks
          // className={
          //   token === null ? navLinksStyles.disabled : navLinksStyles.abled
          // }
          />
          {token !== null && <UserMenu />}
        </div>
      </header>
      <AuthError />
      <main>
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
      </main>
    </div>
  );
}

export default App;
