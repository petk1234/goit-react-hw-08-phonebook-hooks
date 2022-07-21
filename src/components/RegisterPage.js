import authOperations from "../redux/auth/authOperations";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("clicked: register");
    dispatch(authOperations.registerUser(name, email, password));
  };
  return (
    <div>
      <p>It is register page</p>
      <form>
        <div>
          <span>Name</span>
          <input onChange={handleName}></input>
        </div>
        <div>
          <span>Email</span>
          <input onChange={handleEmail}></input>
        </div>
        <div>
          <span>Password</span>
          <input onChange={handlePassword}></input>
        </div>
        <button onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
}
export default RegisterPage;
