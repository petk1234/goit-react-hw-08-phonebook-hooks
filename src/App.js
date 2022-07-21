import { Link, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ContactsPage from "./components/ContactsPage";
import UserMenu from "./components/UserMenu";
import routes from "./components/routes";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import authOperations from "./redux/auth/authOperations";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  useEffect(() => {
    let myStorage = window.localStorage;
    console.log(myStorage.getItem("token"));
    if (myStorage.getItem("token") !== null) {
      dispatch(authOperations.getCurrentUser(myStorage.getItem("token")));
    }
  }, []);
  useEffect(() => {
    if (token !== null) {
      console.log("hfhfh");
      navigate(`${routes.contacts}`);
    }
  }, [token]);
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
        <Route path={`${routes.login}`} element={<LoginPage />}></Route>
        <Route path={`${routes.register}`} element={<RegisterPage />}></Route>
        <Route path={`${routes.contacts}`} element={<ContactsPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

// UseEffect-ов может быть несколько, каждый может иметь разное тело
// к примеру, тут я очень долго сидел и не мог понять, почему у меня происходит infinite loop,
// когда у меня UseEffect выглядел так:
// useEffect(() => {
//   let myStorage = window.localStorage;
//   console.log(myStorage.getItem("token"));
//   if (myStorage.getItem("token") !== null) {
//     dispatch(authOperations.getCurrentUser(myStorage.getItem("token")));
//   }
//   if (token !== null) {
//     console.log("hfhfh");
//     navigate(`${routes.contacts}`);
//   }
// }, [token]);
// по итогу я получал infinity loop, вызывался он из-за того, что я в массиве зависимости
// отслеживал token, а при этом dispatch(authOperations.getCurrentUser(myStorage.getItem("token")))
// изменяет state в общем store моего приложения и следовательно token постоянно обновлялся, я
// постоянно за ним следил и вот вам infinity loop.
// Решением было разделить useEffect на 2 части, а именно:
// useEffect(() => {
//   let myStorage = window.localStorage;
//   console.log(myStorage.getItem("token"));
//   if (myStorage.getItem("token") !== null) {
//     dispatch(authOperations.getCurrentUser(myStorage.getItem("token")));
//   }
// }, []);
// useEffect(() => {
//   if (token !== null) {
//     console.log("hfhfh");
//     navigate(`${routes.contacts}`);
//   }
// }, [token]);
// В данном случае у меня первый useEffect вызывается всего лишь 1 раз при моунте страницы.
// А второй useEffect срабатывает (обновляется) только тогда, когда изменяется значение token
// (при этом во втором useEffect нет функций, которые могли бы как либо изменить state
// глобального store, а поэтому infinity loop не происходит).
//
//
//
