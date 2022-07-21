import { useSelector, useDispatch } from "react-redux";
import authOperations from "../redux/auth/authOperations";
import { useNavigate } from "react-router-dom";
import routes from "./routes";
function UserMenu() {
  let name = useSelector((state) => state.auth.user.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = (e) => {
    navigate(`${routes.login}`);
    dispatch(authOperations.logoutUser());
  };
  return (
    <>
      {name !== undefined ? (
        <header>
          <p>Hello, {name}</p>
          <button onClick={handleLogOut}>Log out</button>
        </header>
      ) : (
        <header>
          <p>Hello, </p>
        </header>
      )}
    </>
  );
}
export default UserMenu;
