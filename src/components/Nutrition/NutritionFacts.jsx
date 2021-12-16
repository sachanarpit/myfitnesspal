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
      <div className={styles.second}>
        <div className={styles.sdark}>
          Submitted on :<span className={styles.date}>11/12/2000</span>{" "}
        </div>
        <div className={styles.sdark}>
          Confirmed Users: <span className={styles.date}>0</span>
        </div>
        <div className={styles.fat1}>
          <div className={styles.dark}>Calcium</div>
          <div className={styles.light}>0 %</div>
        </div>
        <div className={styles.fat2}>
          <div className={styles.dark}>Iron</div>
          <div className={styles.light}>0 %</div>
        </div>
        <div className={styles.fat2}>
          <div className={styles.dark}>Vitamin C</div>
          <div className={styles.light}>0 %</div>
        </div>
        <div className={styles.fat2}>
          <div className={styles.dark}>Vitamin A</div>
          <div className={styles.light}>0 %</div>
        </div>
        <div className={styles.fat2}>
          <div className={styles.dark}>Sodium</div>
          <div className={styles.light}>4 mg</div>
        </div>
        <div className={styles.fat2}>
          <div className={styles.dark}>Sugars</div>
          <div className={styles.light}>0 g</div>
        </div>
        <div className={styles.fat2}>
          <div className={styles.dark}>Protein</div>
          <div className={styles.light}>3 g</div>
        </div>
        <div className={styles.fat2}>
          <div className={styles.dark}>Pottasium</div>
          <div className={styles.light}>33 mg</div>
        </div>
      </div>
      <div className={styles.third}></div>
    </div>
  );
}

export default NutritionFacts;
