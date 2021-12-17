import { Route, Switch, Link } from "react-router-dom";
import IndexHome from "../components/Home-Page/Index";
import { SignUpForm1 } from "../components/SignUp-Forms/Form1";
import { SignUpForm10 } from "../components/SignUp-Forms/Form10";
import { SignUpForm2 } from "../components/SignUp-Forms/Form2";
import { SignUpForm3 } from "../components/SignUp-Forms/Form3";
import { SignUpForm4 } from "../components/SignUp-Forms/Form4";
import { SignUpForm5 } from "../components/SignUp-Forms/Form5";
import { SignUpForm6 } from "../components/SignUp-Forms/Form6";
import { SignUpForm7 } from "../components/SignUp-Forms/Form7";
import { SignUpForm8 } from "../components/SignUp-Forms/Form8";
import { SignUpForm9 } from "../components/SignUp-Forms/Form9";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <IndexHome next={"/signup-1"} />
        </Route>
        <Route exact path="/signup-1">
          <SignUpForm1 next={"/signup-2"} />
        </Route>
        <Route exact path="/signup-2">
          <SignUpForm2 next={"/signup-3"} prev={"/signup-1"} />
        </Route>
        <Route exact path="/signup-3">
          <SignUpForm3 next={"/signup-4"} prev={"/signup-2"} />
        </Route>
        <Route exact path="/signup-4">
          <SignUpForm4 next={"/signup-5"} prev={"/signup-3"} />
        </Route>
        <Route exact path="/signup-5">
          <SignUpForm5 next={"/signup-6"} prev={"/signup-4"} />
        </Route>
        <Route exact path="/signup-6">
          <SignUpForm6 next={"/signup-7"} prev={"/signup-5"} />
        </Route>
        <Route exact path="/signup-7">
          <SignUpForm7 next={"/signup-8"} prev={"/signup-6"} />
        </Route>
        <Route exact path="/signup-8">
          <SignUpForm8 next={"/signup-9"} prev={"/signup-7"} />
        </Route>

        <Route exact path="/signup-9">
          <SignUpForm9 next={"/signup-10"} prev={"/signup-8"} />
        </Route>
        <Route exact path="/signup-10">
          <SignUpForm10 next={"/signup-1"} prev={"/signup-9"} />
        </Route>
        <Route path="/products/:id">"new product"</Route>
        <Route>
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </>
  );
};
