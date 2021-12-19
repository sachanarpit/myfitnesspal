import styles from "./Navbar.module.css"
export const NavbarWithhome=()=> {
    return (
        <div className={styles.main}>
            <div className={styles.ins}>
                <div style={{padding:"16px",backgroundColor:"#003A87"}}>HOME</div>
                <div >FOOD</div>
                <div>EXERCISE</div>
                <div>APPS</div>
                <div>COMMUNITY</div>
                <div>BLOG</div>
                <div>PREMIUM</div>
            </div>
        </div>
    )
}



