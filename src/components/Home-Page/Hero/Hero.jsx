import img from "./Utils/Hero.png"
import styles from "./Hero.module.css"
function Hero() {
    return (
        <div className={styles.main}>
            <div className={styles.absolute}>
            Fitness starts with what you eat.
            </div>
            <div className={styles.info}></div>
            <img src={img} alt="njh" className={styles.img} />
        </div>
    )
}

export default Hero
