import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import routes from "../components/routes";
import authOperations from "../redux/auth/authOperations";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    // navigate(`${routes.contacts}`);
    dispatch(authOperations.loginUser(email, password));
    navigate(`${routes.contacts}`);
  };
  useEffect(() => {
    console.log("ff");
    console.log(token);
    if (token !== null) {
      console.log("from login to contacts");
      navigate(`${routes.contacts}`);
    }
  });
  return (
    <div>
      <p>It is login page</p>
      <form>
        <div>
          <span>Email</span>
          <input onChange={handleEmail}></input>
        </div>
        <div>
          <span>Password</span>
          <input onChange={handlePassword}></input>
        </div>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}
export default LoginPage;
