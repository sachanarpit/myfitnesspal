import { Form2Navbar } from "../Form2/Navbar.Form2";
import { Form3card } from "./Form3card";

export const SignUpForm3 = ({ prev, next }) => {
  return (
    <div>
      <Form2Navbar />
      <Form3card prev={prev} next={next} />
    </div>
  );
};
