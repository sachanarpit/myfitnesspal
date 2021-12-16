import { Link } from "react-router-dom";
import { Body1, Body2, Heading6 } from "../../GlobalComp/Heading.Pages.Signup";
import styles from "./Form3.module.css";

export const Form3card = ({ prev, next }) => {
  return (
    <>
      <div className={styles.card3main}>
        <div className={styles.rect2}></div>
        <div className={styles.ques1}>
          <Heading6>What is your baseline activity level?</Heading6>
        </div>
        <div className={styles.para1}>
          Not including workouts-we count that separately
        </div>
        <div className={styles.box1}>
          <Body1 className={styles.body1}>Not Very Active</Body1>
          <Body2 className={styles.body1}>
            Spend most of the day sitting (e,g., bankteller, desk job)
          </Body2>
        </div>
        <div className={styles.box2}>
          <Body1 className={styles.body1}>Lightly Active</Body1>
          <Body2 className={styles.body1}>
            Spend a good part of the day on your feet (e.g, teacher,
            salesperson)
          </Body2>
        </div>
        <div className={styles.box3}>
          <Body1 className={styles.body1}>Active</Body1>
          <Body2 className={styles.body1}>
            Spend a good part of the day doing physical activity (e.g, food
            server, postal courier)
          </Body2>
        </div>
        <div className={styles.box4}>
          <Body1 className={styles.body1}>Very Active</Body1>
          <Body2 className={styles.body1}>
            Spend a good part of the day doing heavy physical activity (e.g,
            bike messanger, carpenter)
          </Body2>
        </div>
        <div>
          <Link to={prev}>
            <button className={styles.back1}>Back</button>
          </Link>
          <Link to={next}>
            <button className={styles.next1}>Next</button>
          </Link>
        </div>
      </div>
    </>
  );
};
