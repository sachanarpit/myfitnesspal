import styles from "./NutritionFacts.module.css";
function NutritionFacts() {
  return (
    <div className={styles.main}>
      <div className={styles.first}>
        <div className={styles.vdark}>Nutrition Facts</div>
      </div>
      <div className={styles.second}></div>
      <div className={styles.third}></div>
    </div>
  );
}

export default NutritionFacts;
