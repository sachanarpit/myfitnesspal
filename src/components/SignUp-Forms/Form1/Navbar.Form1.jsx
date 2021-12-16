import styles from "./Navbar.module.css";

export const Form1Navbar = () => {
  return (
    <div>
      <div className={styles.navmain}>
        <div className={styles.logodiv}>
          <img src="logo.svg" alt="logo" />
        </div>
        {/* <div className={styles.loginDiv}>
 Login
</div> */}
      </div>
    </div>
  );
};
