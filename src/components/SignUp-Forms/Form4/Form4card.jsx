
import styles from "./Form4.module.css"

export const Form4card=()=>{
return (
    <>
    <div className={styles.card4main}>
    <div className={styles.rect3}>

    </div>
    <div className={styles.ques2}></div>
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
<div className={styles.born}></div>
<div>
    <input className={styles.date} type="date" />
</div>
<div className={styles.live}></div>
<div>
    <input className={styles.country} type="text" placeholder="  Country" />
    <input className={styles.zipcode} type="number" placeholder="  Zipcode" />
</div>
<div className={styles.descrip}></div>
<div>
        <button className={styles.back2}>Back</button>
        <button className={styles.next2}>Next</button>
    </div>
    </div>
    </>
)

}