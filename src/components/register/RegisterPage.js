import authOperations from "../../redux/auth/authOperations";
import Loader from "../loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import routes from "../routes";
import styles from "./register.module.scss";
import Form from "../Form";
import returnImg from "../../images/return.png";
function RegisterPage() {
  const isLoading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();

  const handleRegister = (userFormInfo) => {
    const { name, email, password } = userFormInfo;
    dispatch(authOperations.registerUser(name, email, password));
  };
  return (
    <div className={styles.registerPage}>
      <div className={styles.registerContainer}>
        <Link className={styles.registerToHome} to={`${routes.home}`}>
          <img src={returnImg} />
        </Link>
        <h3>Register form</h3>
        <Form operation={handleRegister} formType="register" styles={styles}>
          Register
        </Form>
      </div>
      <p>Already Registered? {<Link to={`${routes.login}`}>Login</Link>}!</p>
      {isLoading === true && <Loader />}
    </div>
  );
}
export default RegisterPage;
