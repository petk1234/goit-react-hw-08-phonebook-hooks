import { Link, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ContactsPage from "./components/ContactsPage";
import UserMenu from "./components/UserMenu";
import routes from "./components/routes";
import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import authOperations from "./redux/auth/authOperations";
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
      {/* {token !== null && <Navigate to={`${routes.contacts}`}></Navigate>} */}
      <Routes>
        <Route path={`${routes.home}`} element={<HomePage />}></Route>
        {token === null ? (
          <>
            <Route path={`${routes.login}`} element={<LoginPage />}></Route>
            <Route
              path={`${routes.register}`}
              element={<RegisterPage />}
            ></Route>
          </>
        ) : (
          <Route path={`${routes.contacts}`} element={<ContactsPage />}></Route>
        )}
      </Routes>
    </>
  );
}

export default App;
