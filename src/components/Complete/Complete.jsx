import styles from "./Complete.module.css";
import circle from "./Utils/circle.svg";
import crown from "./Utils/crown.svg";
import cross from "./Utils/cross.svg";
import { Body1 } from "../GlobalComp/Heading.Pages.Signup";
import Button from "./Utils/Button.svg";

function Complete() {
  return (
    <div className={styles.main}>
      <div className={styles.blue}>
        <div className={styles.circle}>
          <img src={circle} alt="circle" />
        </div>
        <div className={styles.crown}>
          <img src={crown} alt="circle" />
        </div>
        <div className={styles.cross}>
          <img src={cross} alt="cross" />
        </div>
      </div>
      <div className={styles.white}>
        <div className={styles.reach}>Reach your goals faster</div>
        <div className={styles.body1}>
          <Body1>
            Our Premium are ad-free and customizable to <br />
            any heart healthy, low carb or macronutrient
            <br /> diet plans.
          </Body1>
        </div>
        <div className={styles.button}>
          <img src={Button} alt="buttton" />
        </div>
      </div>
    </div>
  );
}

export default Complete;
