import { Body1 } from "../GlobalComp/Heading.Pages.Signup";
import styles from "./Addfood.module.css";
import img from "./Utils/image.png";
import { useState } from "react";
import axios from "axios";

const Im = () => {
  return (
    <div>
      <div className={styles.lower}>
        <img src={img} alt="nnn" />
      </div>
    </div>
  );
};
const Cont = () => {
  return (
    <div>
      <div className={styles.matching}>Matching foods</div>
      <div className={styles.data}></div>
    </div>
  );
};

function Addfood() {
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const data = axios.get("http://localhost:2345/food").then((res) => {
      console.log(res);
    });
    setShow(false);
  };
  return (
    <div>
      <div className={styles.up}>
        Add Food to
        <span className={styles.light}>Breakfast</span>
      </div>
      <div className={styles.se}>
        <Body1>Search our food database by name :</Body1>
      </div>
      <div className={styles.input}>
        <input type="text" onChange={handleChange} />
      </div>
      {show ? <Im /> : <Cont />}
    </div>
  );
}

export default Addfood;
