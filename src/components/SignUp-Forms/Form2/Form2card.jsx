import { Link } from "react-router-dom";
import { Heading6 } from "../../GlobalComp/Heading.Pages.Signup";
import { ProgressBar1 } from "../../GlobalComp/ProgressBar.Pages";
import {
  GoalBtnSignUp,
  SignUpBackButton,
  SignUpNextButton,
} from "../../GlobalComp/SignUp.Pages.Button";
import styles from "./Form2.module.css";

export const Form2card = ({ next, prev }) => {
  return (
    <div className="fadeIn">
      <div className={styles.card2main}>
        <ProgressBar1></ProgressBar1>

        <div className={styles.ques}>
          <Heading6>What is your weight goal?</Heading6>
        </div>
        <GoalBtnSignUp className={styles.option1}>Lose Weight</GoalBtnSignUp>
        <GoalBtnSignUp className={styles.option2}>
          Maintain Weight
        </GoalBtnSignUp>
        <GoalBtnSignUp className={styles.option3}>Gain Weight</GoalBtnSignUp>
        <div>
          <Link to={prev}>
            <SignUpBackButton className={styles.back}>Back</SignUpBackButton>
          </Link>
          <Link to={next}>
            <SignUpNextButton className={styles.next}>Next</SignUpNextButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
