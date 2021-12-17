import { Body2, Heading6 } from "../../GlobalComp/Heading.Pages.Signup";
import { WideInput } from "../../GlobalComp/Input.Pages.SignUp";
import { ProgressBar7 } from "../../GlobalComp/ProgressBar.Pages";
import {
  SignUpBackButton,
  SignUpContinueButton,
  SignUpNextButton,
} from "../../GlobalComp/SignUp.Pages.Button";
import styles from "./Form8.module.css";

export const Form8card = () => {
  return (
    <>
      <div className={styles.card8main}>
        <ProgressBar7></ProgressBar7>

        <div className={styles.ques}>
          <Heading6>Create a username.</Heading6>
        </div>
        <div className={styles.email}>
          <WideInput placeholder={""} typeInput={"text"}></WideInput>
        </div>
        <SignUpBackButton className={styles.back}>Back</SignUpBackButton>
        <SignUpNextButton className={styles.next}>Next</SignUpNextButton>
      </div>
    </>
  );
};
