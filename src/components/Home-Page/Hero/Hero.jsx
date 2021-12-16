import img from "../Utils/HERO.svg";
import styles from "./Hero.module.css";
import se from "../Utils/Sbar.png";
import { Link } from "react-router-dom";

function Hero({ next }) {
  return (
    <div className={styles.main}>
      <div className={styles.absolute}>Fitness starts with what you eat.</div>
      <div className={styles.info}>
        Take control of your goals. Track calories, break down ingredients, and
        log activities with MyFitnessPal.
      </div>
      <Link to={next}>
        <div className={styles.button}>START FOR FREE</div>
      </Link>
      <div className={styles.cont}>
        <div className={styles.al}>Already have an account ?</div>

        <div className={styles.login}>Login</div>
      </div>
      <div className={styles.above_search1}>
        Search over 11 million foods in our database.
      </div>
      <div className={styles.above_search2}>
        What's in your food? Learn about calorie count, nutrition information
        and serving size.
      </div>
      <div className={styles.search}>
        <img src={se} alt="dc" />
      </div>
      <img src={img} alt="njh" className={styles.img} />
    </div>
  );
}

export default Hero;
