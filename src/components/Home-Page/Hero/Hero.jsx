import img from "./Utils/HERO_IMAGE.jpg"
import styles from "./Hero.module.css"
function Hero() {
    return (
        <div className={styles.main}>
            <img src={img} alt="njh" className={styles.img} />
        </div>
    )
}

export default Hero
