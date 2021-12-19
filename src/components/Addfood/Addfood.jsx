import { Body1, SubTitle1 } from "../GlobalComp/Heading.Pages.Signup";
import styles from "./Addfood.module.css";
import img from "./Utils/image.png";
import { useState } from "react";
import axios from "axios";
import vector from "./Utils/Vector.svg";
import NutritionFacts from "../Nutrition/NutritionFacts";
import nutri from "./Utils/nutri.svg";
import add from "./Utils/add.svg";
import Logobar from "../Home-Page/Dailysummary/Logobar";
import { NavbarWithhome } from "../Home-Page/Dailysummary/Navbar_withhome";
import { NavbarWithhome1 } from "../Home-Page/Dailysummary/Navbar_withhome1";
import { Redirect, useLocation } from "react-router-dom";
import Footer from "../Home-Page/Footer/Footer";
import { useHistory } from "react-router-dom";

const Im = () => {
  return (
    <div>
      <div className={styles.lower}>
        <img src={img} alt="nnn" />
      </div>
    </div>
  );
};
const Modal = ({ close, id }) => {
  return (
    <div className={styles.modal}>
      <NutritionFacts close={close} id={id} />
    </div>
  );
};
const Extra = ({ name, id, type }) => {
  const [modal, setModal] = useState(false);
  const history = useHistory();
  const open = () => {
    setModal(true);
  };
  const close = () => {
    setModal(false);
  };
  const post = (id) => {
    axios
      .post("http://localhost:2345/list", {
        userId: "Fred",
        foodId: `${id}`,
        cat: type,
      })
      .then(function (response) {
        alert("item is added successfully");
      })
      .then(
        history.push({
          pathname: "/add-food",
        })
      );
  };
  return (
    <div className={styles.info}>
      <h3>
        Homemade - <span>{name}</span>
      </h3>
      <div className={styles.wid}>
        <div
          onClick={() => {
            post(id);
          }}
          className={styles.nutri_i}
        >
          <img src={add} alt="" />
        </div>
        <div onClick={open} className={styles.nutri_i}>
          <img src={nutri} alt="" />
        </div>
      </div>

      {modal ? <Modal close={close} id={id} /> : null}
    </div>
  );
};
const Cont = ({ data, add, showe, type }) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const handle = (i) => {
    setName(i.comment);
    setId(i._id);
    add();
  };
  return (
    <div>
      <div className={styles.matching}>Matching foods</div>
      <div className={styles.data}>
        {data.map((i) => (
          <div>
            <div
              className={styles.inside}
              onClick={() => {
                handle(i);
              }}
            >
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
            <div>
              {showe ? <Extra type={type} name={name} id={id} /> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function Addfood() {
  const { state } = useLocation();
  const [show, setShow] = useState(true);
  const [data, setData] = useState([]);
  const [showe, setShowe] = useState(false);
  console.log(state);

  const handleChange = (e) => {
    const data = axios
      .get(`http://localhost:2345/food/search?q=${e.target.value}`)
      .then(({ data }) => {
        setData(data);
      });
    setShow(false);
  };
  const add = () => {
    setShowe(true);
  };
  return (
    <div>
      <Logobar name={"Arpit"} />
      <NavbarWithhome />
      <NavbarWithhome1 />
      <br />
      <br />
      <div className={styles.up}>
        Add Food to
        <span className={styles.light}>{state}</span>
      </div>
      <div className={styles.se}>
        <Body1>Search our food database by name :</Body1>
      </div>
      <div className={styles.input}>
        <input type="text" onChange={handleChange} />
      </div>
      {show ? (
        <Im />
      ) : (
        <Cont type={state} data={data} add={add} showe={showe} />
      )}
      <Footer />
    </div>
  );
}

export default Addfood;
