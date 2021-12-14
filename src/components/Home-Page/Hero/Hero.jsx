import img from "./Utils/Hero.png";
import styles from "./Hero.module.css";
function Hero() {
  return (
    <div className={styles.main}>
      <div className={styles.absolute}>Fitness starts with what you eat.</div>
      <div className={styles.info}>
        Take control of your goals. Track calories, break down ingredients, and
        log activities with MyFitnessPal.
      </div>
      <div className={styles.button}>START FOR FREE</div>
      <img src={img} alt="njh" className={styles.img} />
    </div>
  );
}

export default Hero;
