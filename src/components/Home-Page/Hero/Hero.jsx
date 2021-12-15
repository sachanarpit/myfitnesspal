import img from "../Utils/Hero.png";
import styles from "./Hero.module.css";
import se from "../Utils/Sbar.png";
function Hero() {
  return (
    <div className={styles.main}>
      <div className={styles.absolute}>Fitness starts with what you eat.</div>
      <div className={styles.info}>
        Take control of your goals. Track calories, break down ingredients, and
        log activities with MyFitnessPal.
      </div>
      <div className={styles.button}>START FOR FREE</div>
      <div className={styles.cont}>
        <div className={styles.al}>Already have an account ?</div>

        <div className={styles.login}>Login</div>
      </div>
      <div className={styles.above_search1}>
        Search over 11 million foods in our database.
      </div>
      <div className={styles.above_search2}></div>
      <div className={styles.search}>
        <img src={se} alt="dc" />
      </div>
      <img src={img} alt="njh" className={styles.img} />
    </div>
  );
}

export default Hero;
