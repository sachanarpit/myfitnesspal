import styles from "./Logobar.module.css";
import logo from "../Utils/logo.svg";
function Logobar() {
  return (
    <div className={styles.main}>
      <div className={styles.img}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.log}>
        <div className={styles.login}>Log In</div>
        <div className={styles.vertical}></div>
        <div className={styles.login}>Sign up</div>
      </div>
    </div>
  );
}

export default Logobar;
