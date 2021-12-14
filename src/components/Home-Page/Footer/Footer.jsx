 import styles from "./Footer.module.css"
function Footer() {
    return (
        <div className={styles.main}>
            <div className={styles.info}>
                <div className={styles.half}>
                <div>Calorie Counter</div>
                <div>Blog</div>
                <div>Terms</div>
                <div>Privacy</div>
                <div>Contact Us</div>
                <div>API</div>
                <div>Jobs</div>
                <div>Feedback</div>
                <div>Community Guidelines</div>
                <div>Ad Choices</div>
                <div>Do Not Sell My Personal Information</div>  
                </div>
            </div>
            <div className={styles.year}>
                <div>© 2021 MyFitnessPal, Inc.</div>
            </div>
        </div>
    )
}

export default Footer
