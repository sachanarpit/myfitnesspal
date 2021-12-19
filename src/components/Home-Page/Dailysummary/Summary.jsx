import { Link } from "react-router-dom";
import {
  Body1,
  Heading1,
  Heading6,
  SubTitle1,
} from "../../GlobalComp/Heading.Pages.Signup";
import {
  SignUpBackButton,
  SignUpNextButton,
} from "../../GlobalComp/SignUp.Pages.Button";
import Footer from "../Footer/Footer";
import styles from "./Summary.module.css";

export const Summary = ({ calorie, prev, next, email }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.main1}>
            <div>
              <img src="Streak.svg" />
            </div>
          </div>
          <div className={styles.main2}>
            <div className={styles.photobox}>
              <img src="Photobox.svg" />
            </div>

            <div className={styles.secbox_main}>
              <div className={styles.secbox1}>
                <div className={styles.calo_img}>
                  <img src="Calorie.svg" />
                </div>
                <div className={styles.head1}>
                  <Heading1 style={{ color: "#85C400" }}>{calorie}</Heading1>
                </div>
              </div>

              <div className={styles.secbox2}>
                <div className={styles.goal}>
                  <div className={styles.text_goal}>Goal</div>
                  <Heading6 style={{ color: "#85C400" }}>{calorie}</Heading6>
                </div>
                <div className={styles.butt}>
                  <Link to={prev}>
                    <button className={styles.back}>ADD EXCERCISE</button>
                  </Link>
                  <Link to="/add-food">
                    <button className={styles.next}>ADD FOOD</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.main3}>
            <img src="Bucketbox.svg" />
          </div>

          <div className={styles.main4}>
            <div>
              <img src="Email.svg" />
            </div>
            <div className={styles.email}>
              <div>
                <Body1>{email}</Body1>
              </div>
              <div>
                <img src="Emailchange.svg" />
              </div>
            </div>
          </div>
          <div className={styles.main5}>
            <img src="Post.svg" />
          </div>
        </div>
        <div className={styles.main_right}>
          <div className={styles.top}>
            <img src="Topic.svg" />
          </div>
          <div className={styles.bottom}>
            <img src="Topic1.svg" />
          </div>
        </div>
      </div>

      <div>
        <center>
          <img src="Goals.svg" />
        </center>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};
