import { Link } from "react-router-dom";
import { Body1, Heading6 } from "../../GlobalComp/Heading.Pages.Signup";
import { WeightInput } from "../../GlobalComp/Input.Pages.SignUp";
import { ProgressBar5 } from "../../GlobalComp/ProgressBar.Pages";
import {
  SignUpBackButton,
  SignUpNextButton,
} from "../../GlobalComp/SignUp.Pages.Button";
import { Form2Navbar } from "../Form2/Navbar.Form2";
import styles from "./Form6.module.css";

export const Form6card = ({ prev, next }) => {
  return (
    <div className="fadeIn">
      <div className={styles.card6main}>
        <ProgressBar5></ProgressBar5>
        <div className={styles.ques2}>
          <Heading6>How tall are you?</Heading6>
        </div>

        <div className={styles.weight_div}>
          <div className={styles.ft}>
            <WeightInput placeholder={"ft"}></WeightInput>
          </div>
          <div className={styles.in}>
            <WeightInput placeholder={"in"}></WeightInput>
          </div>
        </div>

        <div className={styles.para}>
          <p>Change units to centimeters</p>
        </div>
        <div className={styles.ques3}>
          <Heading6>How much do you weigh?</Heading6>
        </div>
        <div className={styles.descrip2}>
          <Body1>It’s OK to estimate. You can update this later.</Body1>
        </div>
        <div className={styles.lbs}>
          <WeightInput placeholder={"lbs"}></WeightInput>
        </div>
        <div className={styles.para}>
          <p>Change units to kilograms</p>
        </div>

        <div className={styles.ques3}>
          <Heading6>How much do you weigh?</Heading6>
        </div>
        <div className={styles.descrip}>
          <Body1>
            Don’t worry. This doesn’t affect your daily calorie
            <br /> goal and you can always change it later.
          </Body1>
        </div>
        <div className={styles.lbs}>
          <WeightInput placeholder={"lbs"}></WeightInput>
        </div>
        <div className={styles.para}>
          <p>Change units to kilograms</p>
        </div>
        <div>
          <Link to={prev}>
            <SignUpBackButton className={styles.back6}>Back</SignUpBackButton>
          </Link>
          <Link to={next}>
            <SignUpNextButton className={styles.next6}>Next</SignUpNextButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
