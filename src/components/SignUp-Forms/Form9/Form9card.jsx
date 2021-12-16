

import { Body1, Body2, Heading4, Heading6 } from "../../GlobalComp/Heading.Pages.Signup"

import { ProgressBar8 } from "../../GlobalComp/ProgressBar.Pages"
import { SignUpContinueButton } from "../../GlobalComp/SignUp.Pages.Button"
import styles from "./Form9.module.css"

export const Form9card=()=>{
return (
    <>
    <div className={styles.card9main}>

    <ProgressBar8></ProgressBar8>
    
    
    <div className={styles.ques}>
        <Heading4 >Congratulations</Heading4>
    </div>
    <div className={styles.body}>
    <Body1>Your daily net calorie goal is</Body1>
    </div>
    <div className={styles.ques2}>
        <Heading4 >2,740</Heading4>
    </div>
    <div className={styles.sticker}>
        Calories
    </div>
<div className={styles.info}>
    <Body2>With this plan,you should :</Body2>
    <div>
    <span className={styles.gain}>Gain 6 Kg</span><span> By </span><span className={styles.gain}>February 8</span>
    </div>
    <hr className={styles.line}/>
</div>
<div className={styles.check}>
        <input className={styles.input} type="checkbox" />
        <span className={styles.span}>Sign Up for Emails</span>
    </div>
 <div className={styles.body}>
     <p>Get recipes, workout, and nutrition & fitness tips from MyFitnessPal <br/>experts. Plus, a first look at new features!</p>
 </div>
 <div className={styles.cont}>
     <SignUpContinueButton>EXPLORE MYFITNESSPAL</SignUpContinueButton>
 </div>
    </div>
    </>
)

}