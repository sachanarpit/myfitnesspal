import { Form1Navbar } from "./Navbar.Form1";

import { Form1card } from "./Form1card";

export const SignUpForm1 = ({ next }) => {
  return (
    <div>
      <Form1Navbar />
      <center>
        <Form1card next={next} />
      </center>
    </div>
  );
};
