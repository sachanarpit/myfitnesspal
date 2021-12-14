import Footer from "../components/Home-Page/Footer/Footer";
import Hero from "../components/Home-Page/Hero/Hero";
import NavbarWithoutLogin from "../components/Home-Page/Navbar_withoutlogin/Navbar_withoutlogin";
import { SignUpForm1 } from "../components/SignUp-Forms/Form1/index";
import {
  SignUpBackButton,
  SignUpNextButton,
  SignUpContinueButton,
  GoalBtnSignUp,
} from "../components/GlobalComp/SignUp.Pages.Button";

import {
  Heading6,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  SubTitle1,
  SubTitle2,
} from "../components/GlobalComp/Heading.Pages.Signup";

export const Test = () => {
  return (
    <>
      <SignUpForm1 />
      <SignUpBackButton>Back</SignUpBackButton>
      <SignUpNextButton>Next</SignUpNextButton>
      <br />
      <br />
      <SignUpContinueButton>CONTINUE</SignUpContinueButton>
      <br />
      <br />
      <GoalBtnSignUp>Lose Weight</GoalBtnSignUp>
      <Heading1>Heading 1</Heading1>
      <Heading2>Heading 2</Heading2>
      <Heading3>Heading 3</Heading3>
      <Heading4>Heading 4</Heading4>
      <Heading5>Heading 5</Heading5>
      <Heading6>Heading 6</Heading6>
      <SubTitle1>SubTitle1</SubTitle1>
      <SubTitle2>SubTitle2</SubTitle2>
      {/* <NavbarWithoutLogin/>
      <Hero/>
      <Footer/> */}
    </>
  );
};
