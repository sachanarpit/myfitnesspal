


import Logobar from "./Logobar";
import { NavbarWithhome } from "./Navbar_withhome";
import { NavbarWithhome1 } from "./Navbar_withhome1";
import { Summary } from "./Summary";


export const Dailypage = ({next,prev}) => {
  const calorie=3600;
  const email="Avishek_uxd2_092@masai.school";
  const name="Avishek_nayak";
  return (
    <div>
        <Logobar name={name} />
        <NavbarWithhome />
        <NavbarWithhome1 />
     <Summary calorie={calorie} next={next} prev={prev} email={email}/>
     
    </div>
  );
};
