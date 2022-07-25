import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import styles from "./loader.module.scss";
function Loader() {
  const isLoading = useSelector((state) => state.auth.isLoading);
  return (
    <div className={styles.loaderContainer}>
      <Spinner animation="border" variant="info" className={styles.loader} />
    </div>
  );
}
export default Loader;
