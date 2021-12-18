import styles from "./Recepie.module.css";
import rec_1 from "./Utils/rec_1.svg";
import rec_2 from "./Utils/rec_2.svg";

function Recepie() {
  return (
      <div className={styles.main}>
        <div className={styles.rec}>
          <img src={rec_1} alt="rec_1" />
        </div>
        <div className={styles.rec}>
          <img src={rec_2} alt="rec_1" />
        </div>
        <div className={styles.rec}>
          <img src={rec_1} alt="rec_1" />
        </div>
      </div>
  );
}

export default Recepie;
