import { Form2Navbar } from "../Form2/Navbar.Form2";
import { Form9card } from "./Form9card";
import styles from "./Form9.module.css";

export const SignUpForm9 = ({ prev, next }) => {
  return (
    <div>
      <Form2Navbar />
      <Form9card prev={prev} next={next} />
    </div>
  );
};
