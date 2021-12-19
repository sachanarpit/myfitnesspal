import { Link } from "react-router-dom";
import styles from "./Logobar.module.css";
function Logobar({ name }) {
  return (
    <div className={styles.main}>
      <div className={styles.img}>
        <Link to="/user-home">
          <img src="logo.svg" alt="logo" />
        </Link>
      </div>

      <div className={styles.log1}>
        <div className={styles.login1}>{name}</div>
        <div className={styles.vertical1}></div>
        <div className={styles.login1}>
          <img src="Gmail.svg" />
        </div>
        <div className={styles.vertical1}></div>
      </div>
      <div className={styles.log}>
        <div className={styles.login}>Help</div>
        <div className={styles.vertical}></div>
        <div className={styles.login}>Setting</div>
      </div>
    </div>
  );
}

export default Logobar;
