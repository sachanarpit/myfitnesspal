import { Link } from "react-router-dom";
import { Body1, Body2, Heading6 } from "../../GlobalComp/Heading.Pages.Signup";
import { ProgressBar2 } from "../../GlobalComp/ProgressBar.Pages";
import {
  SignUpBackButton,
  SignUpNextButton,
} from "../../GlobalComp/SignUp.Pages.Button";
import styles from "./Form3.module.css";
import { SelectForm3 } from "./Select.Form3";

export const Form3card = ({ prev, next }) => {
  return (
    <div className="fadeIn">
      <div className={styles.card3main}>
        <ProgressBar2></ProgressBar2>
        <div className={styles.ques1}>
          <Heading6>
            What is your baseline activity
            <br />
            level?
          </Heading6>
        </div>
        <div className={styles.para1}>
          <Body1> Not including workouts-we count that separately</Body1>
        </div>

        <div className={styles.box1}>
          <SelectForm3
            heading={"Not Very Active"}
            para={" Spend most of the day sitting (e,g., bankteller, desk job)"}
            status={false}
          ></SelectForm3>
          <div className={styles.box2}>
            <SelectForm3
              style={{ marginTop: "4px" }}
              heading={"Lightly Active"}
              para={
                " Spend a good part of the day on your feet (e.g, teacher,salesperson)"
              }
              status={false}
            ></SelectForm3>
          </div>
          <div className={styles.box2}>
            <SelectForm3
              heading={"Active"}
              para={
                " Spend a good part of the day doing physical activity (e.g, food server, postal courier)"
              }
              status={false}
            ></SelectForm3>
          </div>
          <div className={styles.box2}>
            <SelectForm3
              heading={"Very Active"}
              para={
                " Spend a good part of the day doing heavy physical activity (e.g,bike messanger, carpenter)"
              }
              status={false}
            ></SelectForm3>
          </div>
        </div>
        <div>
          <Link to={prev}>
            <SignUpBackButton className={styles.back3}>Back</SignUpBackButton>
          </Link>
          <Link to={next}>
            <SignUpNextButton className={styles.next3}>Next</SignUpNextButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
