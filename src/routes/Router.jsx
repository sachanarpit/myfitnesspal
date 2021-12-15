import { Route, Switch, Link } from "react-router-dom";
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
          <Link to="/signup-1">SignUp 1</Link>
        </Route>

        <Route exact path="/signup-1">
          <SignUpForm1 />
        </Route>
        <Route exact path="/signup-2">
          <SignUpForm2 />
        </Route>
        <Route exact path="/signup-3">
          <SignUpForm3 />
        </Route>
        <Route exact path="/signup-4">
          <SignUpForm4 />
        </Route>
        <Route exact path="/signup-5">
          <SignUpForm5 />
        </Route>

        <Route path="/products/:id">"new product"</Route>
        <Route>
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </>
  );
};
