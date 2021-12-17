import { Link } from "react-router-dom";
import { Heading6 } from "../../GlobalComp/Heading.Pages.Signup";
import { SignUpContinueButton } from "../../GlobalComp/SignUp.Pages.Button";
import styles from "./Form1.module.css";

export const Form1card = ({ next }) => {
  return (
    <>
      <div className={styles.card1main}>
        <div className={styles.ques}>
            <center>
            <Heading6>
              Welcome! Just a few quick <br/>questions so we can customize
              <br/>
              MyfitnessPal for you
            </Heading6>
            </center>
        </div>
        <div>
            <Link to={next}>
              <center>
              <SignUpContinueButton className={styles.butt}>CONTINUE</SignUpContinueButton>
              </center>
            </Link>
        </div>
      </div>
    </>
  );
};
