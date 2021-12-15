import { Route, Switch, Link } from "react-router-dom";
import { SignUpForm1 } from "../components/SignUp-Forms/Form1";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Link to="/signup">SignUp 1</Link>
        </Route>

        <Route exact path="/signup">
          <SignUpForm1 />
        </Route>

        <Route path="/products/:id">"new product"</Route>
        <Route>
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </>
  );
};
