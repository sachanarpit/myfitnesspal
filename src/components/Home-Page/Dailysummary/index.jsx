import Logobar from "./Logobar";
import { NavbarWithhome } from "./Navbar_withhome";
import { NavbarWithhome1 } from "./Navbar_withhome1";
import { Summary } from "./Summary";

export const Dailypage = ({ next, prev }) => {
  const calorie = 3600;
  const email = "hello@myfitnesspal.com";
  const name = "Arpit Sachan";
  return (
    <div>
      <Logobar name={name} />
      <NavbarWithhome />
      <NavbarWithhome1 />
      <Summary calorie={calorie} next={next} prev={prev} email={email} />
    </div>
  );
};
