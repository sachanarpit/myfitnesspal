import styles from "./Logobar.module.css";

function Logobar() {
  return (
    <div className={styles.main}>
      <div className={styles.img}>
        <img src="logo.svg" alt="logo" />
      </div>
      
      <div className={styles.log}>
      
        <div className={styles.login}>Log In</div>
        <div className={styles.vertical}></div>
        <div className={styles.login}>Sign Up</div>
        
      </div>
    
   </div>
  );
}

export default Logobar;

