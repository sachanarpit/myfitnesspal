 import styles from "./Footer.module.css"
function Footer() {
    return (
        <div className={styles.main}>
            <div className={styles.info}></div>
            <div className={styles.year}>
                <div>© 2021 MyFitnessPal, Inc.</div>
            </div>
        </div>
    )
}

export default Footer
