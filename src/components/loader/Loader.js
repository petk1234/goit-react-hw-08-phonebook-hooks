import { useSelector } from "react-redux";
import styles from "./loader.module.scss";
function Loader() {
  const isLoading = useSelector((state) => state.auth.isLoading);
  return (
    <div className={styles.loaderContainer}>
      <p>Loading ...</p>
    </div>
  );
}
export default Loader;
