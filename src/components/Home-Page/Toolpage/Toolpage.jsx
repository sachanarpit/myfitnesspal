
import { Body1, Heading3, Heading6, SubTitle2 } from "../../GlobalComp/Heading.Pages.Signup";
import { SignUpContinueButton } from "../../GlobalComp/SignUp.Pages.Button";
import styles from "./Toolpage.module.css";

export const Toolpage = () => {
  return (
    <>
      <div className={styles.main}>
        <center>

          <div className={styles.head} >
            <Heading3>The Tools for Your Goals</Heading3>
          </div>
          <div className={styles.body1}>
            <Body1>Trying to lose weight, tone up, lower your BMI, or invest in your overall health?<br />
              We give you the right features to hit your goals.</Body1>
          </div>

        </center>

        <center>
          <div className={styles.card}>

            <div >
              <center>
                <div>
                  <img src="Component3.svg" alt="image" />
                </div>
              </center>
              <center>
                <div>
                  <Heading6>Logging Simplified.</Heading6>
                </div>
              </center>
              <div>
                <SubTitle2>
                  Keeping a food diary helps you<br /> understand you habits and<br /> increases your likelihood of <br />hitting your goals.
                </SubTitle2>
              </div>
            </div>
            <div>
              <center>
                <div >
                  <img src="Component4.svg" alt="image" />
                </div>
              </center>
              <center>
                <div>
                  <Heading6>Stay Motivated.</Heading6>
                </div>
              </center>
              <div >
                <SubTitle2>
                  Scan barcodes, save meals and<br />receipes  and use Quick tools for<br /> fast and easy food tracking.
                </SubTitle2>
              </div>
            </div>
            <div >
              <center>
                <div >
                  <img src="Component5.svg" alt="image" />
                </div>
              </center>
              <center>
                <div >
                  <Heading6>Learn. Track. Improve</Heading6>
                </div>
              </center>
              <div >
                <SubTitle2>
                  Join the world’s largest Fitness <br />community for advice, tips and <br />support 24*7.
                </SubTitle2>
              </div>
            </div>
           

          </div>
          <center>
              <SignUpContinueButton>START YOU JOURNEY TODAY</SignUpContinueButton>
            </center>
        </center>
      </div>
    </>
  );
};
