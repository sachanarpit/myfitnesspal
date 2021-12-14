import { Route, Switch } from "react-router-dom";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>

        <Route exact path="/products">
          <h1>product page</h1>
        </Route>

        <Route path="/products/:id">"new product"</Route>
        <Route>
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </>
  );
};
