import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Form1Navbar = () => {
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
