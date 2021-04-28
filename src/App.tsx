import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Builder from "./pages/Builder";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Builder />
        </Route>
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
