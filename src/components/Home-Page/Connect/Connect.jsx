import styles from "./Connect.module.css";
import img from "../Utils/Connect.svg";
import heading from "../Utils/Heading_3.svg";
import body from "../Utils/Body_1.svg";
function Connect() {
  return (
    <div>
      <div className={styles.text}>
        <img src={heading} alt="text" />
      </div>
      <div className={styles.body}>
        <img src={body} alt="body" />
      </div>
      <div className={styles.img}>
        <img src={img} alt="nb " />
      </div>
    </div>
  );
}

export default Connect;
