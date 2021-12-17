import { Form2Navbar } from "../Form2/Navbar.Form2";
import { Form7card } from "./Form7card";

export const SignUpForm7 = ({ prev, next }) => {
  return (
    <div>
      <Form2Navbar />
      <Form7card prev={prev} next={next} />
    </div>
  );
};
