import { Form1Navbar } from "./Navbar.Form1";

import { Form1card } from "./Form1card";
import { useEffect } from "react";
import { useState } from "react";
import { LoaderComp } from "../../GlobalComp/Loading.Pages";

export const SignUpForm1 = ({ next }) => {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 500);
  }, []);
  return spinner === true ? (
    <LoaderComp />
  ) : (
    <div>
      <Form1Navbar />
      <center>
        <Form1card next={next} />
      </center>
    </div>
  );
};
