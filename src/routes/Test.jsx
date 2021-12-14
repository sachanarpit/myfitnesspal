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
  Body2,
  Body1,
} from "../components/GlobalComp/Heading.Pages.Signup";
import {
  ProgressBar1,
  ProgressBar2,
  ProgressBar3,
  ProgressBar4,
  ProgressBar5,
  ProgressBar6,
  ProgressBar7,
  ProgressBar8,
} from "../components/GlobalComp/ProgressBar.Pages";
import { SelectForm3 } from "../components/SignUp-Forms/Form3/Select.Form3";

export const Test = () => {
  return (
    <>
      <SelectForm3>hello</SelectForm3>
      <br />
      {/* <SignUpForm1 /> */}
      <SignUpBackButton>Back</SignUpBackButton>
      <SignUpNextButton>Next</SignUpNextButton>
      <br />
      <br />
      <SignUpContinueButton>CONTINUE</SignUpContinueButton>
      <br />
      <br />
      <ProgressBar1 />
      <br />
      <ProgressBar2 />
      <br />
      <ProgressBar3 />
      <br />
      <ProgressBar4 />
      <br />
      <ProgressBar5 />
      <br />
      <ProgressBar6 />
      <br />
      <ProgressBar7 />
      <br />
      <ProgressBar8 />
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
      <Body1>Body1</Body1>
      <Body2>Body2</Body2>
      {/* <NavbarWithoutLogin/>
      <Hero/>
      <Footer/> */}
    </>
  );
};
