import { Link } from "react-router-dom";
import { Body2, Heading6 } from "../../GlobalComp/Heading.Pages.Signup";
import styles from "./Form5.module.css";

export const Form5card = ({ next, prev }) => {
  return (
    <>
      <div className={styles.card5main}>
        <div className={styles.rect3}></div>

        <div className={styles.ques5}>
          <Heading6>What is your weekly goal ?</Heading6>
        </div>
        <div className={styles.para5}>
          <Body2>
            Let's break down your overall health goal into a weekly one to
            maintain.Slow and steady is best!
          </Body2>
        </div>

        <button className={styles.boxbig}>
          Gain 0.25 Weight weekly (Recommended)
        </button>

        <button className={styles.boxsmall}>Gain 0.5 Weight weekly</button>

        <div>
          <Link to={prev}>
            <button className={styles.back5}>Back</button>
          </Link>
          <Link to={next}>
            <button className={styles.next5}>Next</button>
          </Link>
        </div>
      </div>
    </>
  );
};
