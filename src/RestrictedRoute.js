import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import routes from "./components/routes";
function RestrictedRoute(props) {
  const isAuthenticated = useSelector((state) => state.auth.token);
  return (
    <>
      {isAuthenticated !== null ? (
        <Navigate to={`${routes.contacts}`} />
      ) : (
        props.children
      )}
    </>
  );
}
export default RestrictedRoute;
