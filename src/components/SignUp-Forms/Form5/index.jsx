import { Form2Navbar } from "../Form2/Navbar.Form2";
import { Form5card } from "./Form5card";

export const SignUpForm5 = ({ prev, next }) => {
  return (
    <div>
      <Form2Navbar />
      <Form5card next={next} prev={prev} />
    </div>
  );
};
