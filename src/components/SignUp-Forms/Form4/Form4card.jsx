import { Link } from "react-router-dom";
import { Body2, Heading6 } from "../../GlobalComp/Heading.Pages.Signup";
import styles from "./Form4.module.css";

export const Form4card = ({ prev, next }) => {
  return (
    <>
      <div className={styles.card4main}>
        <div className={styles.rect3}></div>
        <div className={styles.ques2}>
          <Heading6>
            Please select which sex we should use to calculate your calories
            needs
          </Heading6>
        </div>
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
            We use this information to calculate an accurate calories goal for
            you
          </Body2>
        </div>
        <div>
          <Link to={prev}>
            <button className={styles.back2}>Back</button>
          </Link>
          <Link to={next}>
            <button className={styles.next2}>Next</button>
          </Link>
        </div>
      </div>
    </>
  );
};
