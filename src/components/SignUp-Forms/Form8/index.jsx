import { useEffect } from "react";
import { useState } from "react";
import { CrackerComp, LoaderComp } from "../../GlobalComp/Loading.Pages";
import { Form2Navbar } from "../Form2/Navbar.Form2";
import { Form8card } from "./Form8card";

export const SignUpForm8 = ({ prev, next }) => {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000);
  }, []);
  return spinner === true ? (
    <LoaderComp />
  ) : (
    <div>
      <Form2Navbar />
      <Form8card prev={prev} next={next} />
    </div>
  );
};
