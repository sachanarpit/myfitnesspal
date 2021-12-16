import styles from "./NutritionFacts.module.css";
import vector from "./Utils/Vector.svg";
function NutritionFacts() {
  return (
    <div className={styles.main}>
      <div className={styles.first}>
        <div className={styles.vdark}>Nutrition Facts</div>
        <div className={styles.poha}>
          <span className={styles.Pl}>Poha</span>
          <span>
            <img src={vector} alt="mn" />
          </span>
        </div>
        <div className={styles.verylight}>1 cup, 157 calories</div>
        <div className={styles.calories}>
          <div className={styles.dark}>Calories</div>
          <div className={styles.light}>157</div>
        </div>
        <div className={styles.fat}>
          <div className={styles.dark}>Total Fat</div>
          <div className={styles.light}>0 g</div>
        </div>
        <div className={styles.fat}>
          <div className={styles.light}>Saturated</div>
          <div className={styles.light}>0 g</div>
        </div>
        <div className={styles.poly}>
          <div className={styles.light}>Polysaturated</div>
          <div className={styles.light}>0 g</div>
        </div>
        <div className={styles.poly}>
          <div className={styles.light}>Monosaturated</div>
          <div className={styles.light}>0 g</div>
        </div>
        <div className={styles.poly}>
          <div className={styles.dark}>Cholestrol</div>
          <div className={styles.light}>0 g</div>
        </div>
        <div className={styles.poly}>
          <div className={styles.light}>Trans</div>
          <div className={styles.light}>0 g</div>
        </div>
        <div className={styles.poly}>
          <div className={styles.dark}>Dietry Fibre</div>
          <div className={styles.light}>0 g</div>
        </div>
        <div className={styles.poly}>
          <div className={styles.dark}>Total Carbs</div>
          <div className={styles.light}>35 g</div>
        </div>
      </div>
      <div className={styles.second}></div>
      <div className={styles.third}></div>
    </div>
  );
}

export default NutritionFacts;
