import {
    Body1,
    Body2,
    FooterText,
    Heading4,
    Heading6,
  } from "../../GlobalComp/Heading.Pages.Signup";
  
  import { ProgressBar8 } from "../../GlobalComp/ProgressBar.Pages";
  import { SignUpContinueButton } from "../../GlobalComp/SignUp.Pages.Button";
  import styles from "./Form10.module.css";
  
  export const Form10card = () => {
    return (
      <>
      <div className={styles.main}>
      
        <div className={styles.card9main}>
         <div className={styles.backgro}>
         <div >
             <img className={styles.crown} src="Crown.svg" alt="crown img" />
         </div>
           </div>
           <div className={styles.white}>
         <div className={styles.ques}>
        <Heading6 style={{color:"#0066EE"}}>Reach your goals faster</Heading6>
    </div>
        
          <div className={styles.body}>
          <Body1>Our Premium are ad-free and customizable to <br/>any heart healthy, low carb or macronutrient<br/> diet plans.</Body1>
          </div>
          <div className={styles.cont}>
            <SignUpContinueButton>Start free trial</SignUpContinueButton>
          </div>
          </div>
        </div>
        </div>
      </>
    );
  };
  