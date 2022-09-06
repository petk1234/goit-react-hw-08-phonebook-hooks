import routes from "../components/routes";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authOperations from "../redux/auth/authOperations";
export default function useLogout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = (e) => {
    navigate(`${routes.login}`);
    dispatch(authOperations.logoutUser());
  };
  return handleLogOut;
}
