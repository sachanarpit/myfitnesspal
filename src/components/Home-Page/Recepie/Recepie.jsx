import { Body1, Heading3 } from "../../GlobalComp/Heading.Pages.Signup";
import styles from "./Recepie.module.css";
import rec_1 from "./Utils/rec_1.svg";
import rec_2 from "./Utils/rec_2.svg";

function Recepie() {
  return (
    <div>
      <div className={styles.recepie}>
        <Heading3>Recepies & Inspiration.</Heading3>
      </div>
      <div className={styles.mid}>
        <Body1>
          Get nutritionist-approved recipes and motivational workout tips from{" "}
          <br></br>
          MyFitnessPal experts.
        </Body1>
      </div>
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
    </div>
  );
}

export default Recepie;
