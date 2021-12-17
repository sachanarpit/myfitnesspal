

import { Body2, Heading6,FooterText } from "../../GlobalComp/Heading.Pages.Signup"
import { WideInput } from "../../GlobalComp/Input.Pages.SignUp"
import { ProgressBar6 } from "../../GlobalComp/ProgressBar.Pages"
import { SignUpContinueButton } from "../../GlobalComp/SignUp.Pages.Button"
import styles from "./Form7.module.css"

export const Form7card=()=>{
return (
    <>
    <div className={styles.card7main}>

    <ProgressBar6></ProgressBar6>
    
    
    <div className={styles.ques}>
        <Heading6 >Almost there! Create your account.</Heading6>
    </div>
    <div className={styles.email}>
    <WideInput placeholder={"Email address"} type={"email"}></WideInput>
   </div>
   <div className={styles.pass}>
    <WideInput placeholder={"Create a password"} typeInput={"password"}></WideInput>
    
   </div>
   <div className={styles.body}>
    <Body2>Must be at least 10 characters, no spaces.</Body2>
    </div>
    <div className={styles.check}>
        <input className={styles.input} type="checkbox" />
        
        <span className={styles.span_main}><span>I agree to MyFitnessPal </span><span className={styles.span}>Terms & Condition</span> <span>and </span><span className={styles.span}>Privacy Policy.</span></span>
    </div>
    <div className={styles.cont}>
        <SignUpContinueButton >CONTINUE</SignUpContinueButton>
    </div>
    <div className={styles.span2}>
        <span className={styles.span_main}><span>By signing up for MyFitnessPal, you are agreeing to our </span><span className={styles.span}>Privacy </span></span>
        <p>
        <span className={styles.span}>Policy</span><span> & </span><span className={styles.span}>Terms & Condition.</span>
            </p>
    </div>

    <div className={styles.facebook}>
        <SignUpContinueButton>Login with Facebook</SignUpContinueButton>
    </div>
    <div className={styles.body}>
        <Body2>We will never post anything without permission.</Body2>
    </div>

    {/* <div className={styles.last_span}>
    <span className={styles.span_main}><span>This site is protected by reCAPTCHA and the Google </span><span className={styles.span}>Privacy Policy</span>
    </span>
    <p>
    <span> and </span>
    <span className={styles.span}>Terms</span><span> apply </span>
    </p>
     
    </div> */}

<div>
          <FooterText style={{ marginLeft: "5.5vw" }}>
          This site is protected by reCAPTCHA and the Google <span className={styles.span}> Privacy Policy</span>
            <br />
            <span> and </span>
    <span className={styles.span}>Terms</span><span> apply </span>
          </FooterText>
        </div>

    </div>
    </>
)

}