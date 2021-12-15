import { Form2Navbar } from "../Form2/Navbar.Form2";
import { Form2card } from "./Form2card";

export const SignUpForm2 = ({ next, prev }) => {
  return (
    <div>
      <Form2Navbar />
      <Form2card next={next} prev={prev} />
    </div>
  );
};
