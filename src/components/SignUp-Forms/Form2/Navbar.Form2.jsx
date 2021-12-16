import { Link } from "react-router-dom";
import styles from "./Navbar2.module.css";

export const Form2Navbar = () => {
  return (
    <div>
      <div className={styles.navmain}>
        <div className={styles.logodiv}>
          <Link to="/">
            <img src="logo.svg" alt="logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};
