import { Link } from "react-router-dom";
import { Heading6 } from "../../GlobalComp/Heading.Pages.Signup";
import { GoalBtnSignUp } from "../../GlobalComp/SignUp.Pages.Button";
import styles from "./Form2.module.css";

export const Form2card = ({ next, prev }) => {
  return (
    <>
      <div className={styles.card2main}>
        <div className={styles.rect}></div>

        <div className={styles.ques}>
          <Heading6>What is your weight goal?</Heading6>
        </div>

        <button className={styles.option1}>Lose Weight</button>
        <button className={styles.option2}>Maintain Weight</button>
        <button className={styles.option3}>Gain Weight</button>

        <div>
          <Link to={prev}>
            <button className={styles.back}>Back</button>
          </Link>
          <Link to={next}>
            <button className={styles.next}>Next</button>
          </Link>
        </div>
      </div>
    </>
  );
};
