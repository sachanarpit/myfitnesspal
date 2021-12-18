import { Link } from "react-router-dom";
import { Body2, Heading6 } from "../../GlobalComp/Heading.Pages.Signup";
import { ProgressBar3 } from "../../GlobalComp/ProgressBar.Pages";
import {
  SignUpBackButton,
  SignUpNextButton,
} from "../../GlobalComp/SignUp.Pages.Button";
import styles from "./Form4.module.css";

export const Form4card = ({ prev, next }) => {
  return (
    <>
      <div className={styles.card4main}>
        <ProgressBar3></ProgressBar3>
        <div className={styles.ques2}>
          <Heading6>
            Please select which sex we <br />
            should use to calculate your <br />
            calories needs
          </Heading6>
        </div>
        <div className={styles.male_div}>
          <div className={styles.male}>
            <label>
              <input type="radio" name="radio" />
              Male
            </label>
          </div>
          <div className={styles.female}>
            <label>
              <input type="radio" name="radio" />
              Female
            </label>
          </div>
        </div>
        <div className={styles.hint}>
          <img src="Quesicon.svg" alt="ques mark" />
          <div className={styles.hintdetail}>Which one Should i choose ?</div>
        </div>
        <div className={styles.born}>
          <Heading6>Where were you born?</Heading6>
        </div>
        <div>
          <input className={styles.date} type="date" />
        </div>
        <div className={styles.live}>
          <Heading6>Where do you live?</Heading6>
        </div>
        <div>
          <input
            className={styles.country}
            type="text"
            placeholder="  Country"
          />
          <input
            className={styles.zipcode}
            type="number"
            placeholder="  Zipcode"
          />
        </div>
        <div className={styles.descrip}>
          <Body2>
            We use this information to calculate an accurate
            <br /> calories goal for you
          </Body2>
        </div>
        <div>
          <Link to={prev}>
            <SignUpBackButton className={styles.back4}>Back</SignUpBackButton>
          </Link>
          <Link to={next}>
            <SignUpNextButton className={styles.next4}>Next</SignUpNextButton>
          </Link>
        </div>
      </div>
    </>
  );
};
