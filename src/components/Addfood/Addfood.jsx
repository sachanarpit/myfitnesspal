import { Body1, SubTitle1 } from "../GlobalComp/Heading.Pages.Signup";
import styles from "./Addfood.module.css";
import img from "./Utils/image.png";
import { useState } from "react";
import axios from "axios";
import vector from "./Utils/Vector.svg";

const Im = () => {
  return (
    <div>
      <div className={styles.lower}>
        <img src={img} alt="nnn" />
      </div>
    </div>
  );
};
const Cont = ({ data }) => {
  return (
    <div>
      <div className={styles.matching}>Matching foods</div>
      <div className={styles.data}>
        {data.map((i) => (
          <div className={styles.inside}>
            <div className={styles.text}>
              {i.comment}
              <span className={styles.ma}>
                <img src={vector} alt="" />
              </span>
            </div>
            <div className={styles.text1}>
              1 cup, <span>{i.Calories} calories</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function Addfood() {
  const [show, setShow] = useState(true);
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const data = axios
      .get(`http://localhost:2345/food/search?q=${e.target.value}`)
      .then(({ data }) => {
        setData(data);
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
      {show ? <Im /> : <Cont data={data} />}
    </div>
  );
}

export default Addfood;
