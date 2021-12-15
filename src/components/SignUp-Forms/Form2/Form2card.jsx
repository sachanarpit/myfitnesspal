
import styles from "./Form2.module.css"

export const Form2card=()=>{
return (
    <>
    <div className={styles.card2main}>
    <div className={styles.rect}>

    </div>
    
    <div className={styles.ques}></div>
   
    
    <div className={styles.option1}></div>
    <div className={styles.option2}></div>
    <div className={styles.option3}></div>
  

    <div>
        <button className={styles.back}>Back</button>
        <button className={styles.next}>Next</button>
    </div>
    
    </div>
    </>
)

}