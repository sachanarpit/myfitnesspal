import { Form2Navbar } from "../Form2/Navbar.Form2";
import { Form6card } from "./Form6card";

export const SignUpForm6 = ({ prev, next }) => {
  return (
    <div>
      <Form2Navbar />
      <Form6card prev={prev} next={next} />
    </div>
  );
};
