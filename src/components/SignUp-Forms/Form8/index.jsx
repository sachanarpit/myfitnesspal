

import { Form2Navbar } from "../Form2/Navbar.Form2";
import { Form8card } from "./Form8card";





export const SignUpForm8 = ({prev,next}) => {
  return (
    <div>
     <Form2Navbar />
     <Form8card prev={prev} next={next}/>
    </div>
  );
};
