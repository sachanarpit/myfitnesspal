import styles from "./Navbar.module.css"
function NavbarWithoutLogin() {
    return (
        <div className={styles.main}>
            <div className={styles.ins}>
                <div>HOME</div>
                <div>FOOD</div>
                <div>EXERCISE</div>
                <div>APPS</div>
                <div>COMMUNITY</div>
                <div>BLOG</div>
                <div>PREMIUM</div>
            </div>
        </div>
    )
}

export default NavbarWithoutLogin
