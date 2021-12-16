import { Route, Switch, Link } from "react-router-dom";
import IndexHome from "../components/Home-Page/Index";
import { SignUpForm1 } from "../components/SignUp-Forms/Form1";
import { SignUpForm2 } from "../components/SignUp-Forms/Form2";
import { SignUpForm3 } from "../components/SignUp-Forms/Form3";
import { SignUpForm4 } from "../components/SignUp-Forms/Form4";
import { SignUpForm5 } from "../components/SignUp-Forms/Form5";

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
          <SignUpForm5 next={"/signup-1"} prev={"/signup-4"} />
        </Route>
        <Route path="/products/:id">"new product"</Route>
        <Route>
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </>
  );
};
