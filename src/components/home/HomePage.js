import { Link } from "react-router-dom";
import Button from "../button/Button";
import routes from "../routes";
import styles from "./homePage.module.scss";
// import greetings from "../../images/mobile.svg";
import greetings from "../../images/greetings.png";
function HomePage() {
  return (
    <div className={styles.homePage}>
      <div className={styles.homeContainer}>
        <h1>Phonebook</h1>
        <p>Save and manage your contacts easily</p>
        <img className={styles.homeImg} src={greetings} />
        <div className={styles.homeButtons}>
          <Link to={`${routes.login}`}>
            <Button style={styles.homeLogin}>Login</Button>
          </Link>
          <Link to={`${routes.register}`}>
            <Button style={styles.homeRegister}>Register</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
