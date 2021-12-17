import { Link } from "react-router-dom";
import {
  Body1,
  Body2,
  FooterText,
  Heading4,
  Heading6,
} from "../../GlobalComp/Heading.Pages.Signup";

import { ProgressBar8 } from "../../GlobalComp/ProgressBar.Pages";
import { SignUpContinueButton } from "../../GlobalComp/SignUp.Pages.Button";
import styles from "./Form9.module.css";

export const Form9card = ({next}) => {
  return (
    <>
      <div className={styles.card9main}>
        <ProgressBar8></ProgressBar8>

        <center>
          <div className={styles.ques}>
            <Heading4>Congratulations</Heading4>
          </div>
          <div>
            <Body1>Your daily net calorie goal is</Body1>
          </div>
          <div>
            <Heading4>2,740</Heading4>
          </div>
        </center>
        <div className={styles.sticker}>Calories</div>
        <div className={styles.info}>
          <Body2>With this plan,you should :</Body2>
          <div>
            <Heading6 style={{ fontFamily: "NeueSB" }}>
              Gain 6 Kg{" "}
              <span style={{ fontFamily: "NeueT", fontSize: "1.1vw" }}>By</span>{" "}
              February 8
            </Heading6>
          </div>
          <hr className={styles.line} />
        </div>
        <div className={styles.check}>
          <input className={styles.input} type="checkbox" />
          <span className={styles.span}>Sign Up for Emails</span>
        </div>
        <div>
          <FooterText style={{ marginLeft: "5.5vw" }}>
            Get recipes, workout, and nutrition & fitness tips from MyFitnessPal{" "}
            <br />
            experts. Plus, a first look at new features!
          </FooterText>
        </div>
        <div className={styles.cont}>
        <Link to={next}>
          <SignUpContinueButton>EXPLORE MYFITNESSPAL</SignUpContinueButton>
          </Link>
        </div>
      </div>
    </>
  );
};
