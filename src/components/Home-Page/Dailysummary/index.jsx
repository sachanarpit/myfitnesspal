


import { Form2Navbar } from "./Navbar.Form2";
import { NavbarWithhome } from "./Navbar_withhome";
import { NavbarWithhome1 } from "./Navbar_withhome1";
import { Summary } from "./Summary";


export const Dailypage = ({next,prev}) => {
  const calorie=3600;
  const email="Avishek_uxd2_092@masai.school";
  return (
    <div>
        <Form2Navbar />
        <NavbarWithhome />
        <NavbarWithhome1 />
     <Summary calorie={calorie} next={next} prev={prev} email={email}/>
     
    </div>
  );
};
