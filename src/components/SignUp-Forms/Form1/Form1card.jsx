import { Link } from "react-router-dom";
import { Heading6 } from "../../GlobalComp/Heading.Pages.Signup";
import { SignUpContinueButton } from "../../GlobalComp/SignUp.Pages.Button";
import styles from "./Form1.module.css";

export const Form1card = ({ next }) => {
  return (
    <>
      <div className={styles.card1main}>
        <div className={styles.text}>
          <Heading6>
            Welcome! Just a few quick questions so we can customize MyfitnessPal
            for you
          </Heading6>
        </div>
        <div className={styles.butt}>
          <Link to={next}>
            <SignUpContinueButton>CONTINUE</SignUpContinueButton>
          </Link>
        </div>
      </div>
    </>
  );
};
