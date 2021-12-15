import { Form2Navbar } from "../Form2/Navbar.Form2";
import { Form4card } from "./Form4card";

export const SignUpForm4 = ({ prev, next }) => {
  return (
    <div>
      <Form2Navbar />
      <Form4card prev={prev} next={next} />
    </div>
  );
};
