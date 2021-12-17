import { Link } from "react-router-dom";
import { Body2, Heading6 } from "../../GlobalComp/Heading.Pages.Signup";
import { ProgressBar4 } from "../../GlobalComp/ProgressBar.Pages";
import { GoalBtnSignUp, SignUpBackButton, SignUpNextButton } from "../../GlobalComp/SignUp.Pages.Button";
import styles from "./Form5.module.css";

export const Form5card = ({ next, prev }) => {
  return (
    <>
      <div className={styles.card5main}>
        <ProgressBar4></ProgressBar4>

        <div className={styles.ques5}>
          <Heading6>What is your weekly goal ?</Heading6>
        </div>
        <div className={styles.para5}>
          <Body2>
            Let's break down your overall health goal into a weekly one to
            maintain.Slow and steady is best!
          </Body2>
        </div>
<div className={styles.boxbig}>
        <GoalBtnSignUp style={{height: "5.52vw"}}>
          Gain 0.25 Weight weekly <br/>(Recommended)
        </GoalBtnSignUp>
        </div>

        <div className={styles.boxsmall}>
          <GoalBtnSignUp >Gain 0.5 Weight weekly</GoalBtnSignUp>
          </div>

          <div>
       <Link to={prev}>
   <SignUpBackButton className={styles.back5}>Back</SignUpBackButton>
   </Link>
   <Link to={next}>
   <SignUpNextButton className={styles.next5}>Next</SignUpNextButton>
   </Link>
    </div>
      </div>
    </>
  );
};
