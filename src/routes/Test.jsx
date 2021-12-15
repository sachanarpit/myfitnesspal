import IndexHome from "../components/Home-Page/Index";
import NutritionFacts from "../components/Nutrition/NutritionFacts";
import { SignUpForm1 } from "../components/SignUp-Forms/Form1/index";
import {
  SignUpBackButton,
  SignUpNextButton,
  SignUpContinueButton,
  GoalBtnSignUp,
} from "../components/SignUp-Forms/GlobalComp/SignUp.Pages.Button";

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
      <IndexHome />
      <NutritionFacts />
    </>
  );
};
