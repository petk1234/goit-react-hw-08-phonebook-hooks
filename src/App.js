import { Link, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ContactsPage from "./components/ContactsPage";
import UserMenu from "./components/UserMenu";
import routes from "./components/routes";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import authOperations from "./redux/auth/authOperations";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
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
    <>
      {token !== null && <UserMenu />}
      <div>
        <Link to={`${routes.home}`}>Home</Link>
        {token === null ? (
          <>
            <Link to={`${routes.login}`}>Login</Link>
            <Link to={`${routes.register}`}>Register</Link>
          </>
        ) : (
          <Link to={`${routes.contacts}`}>Contacts</Link>
        )}
      </div>
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
    </>
  );
}

export default App;
