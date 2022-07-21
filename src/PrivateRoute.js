import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import routes from "./components/routes";
function PrivateRoute(props) {
  const isAuthenticated = useSelector((state) => state.auth.token);
  return (
    <>
      {isAuthenticated !== null ? (
        props.children
      ) : (
        <Navigate to={`${routes.login}`} />
      )}
    </>
  );
}
export default PrivateRoute;
