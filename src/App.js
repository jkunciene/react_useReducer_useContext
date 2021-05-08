import React from "react";
import Header from "./components/Header";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Store />
          </Route>
        </Switch>
      </>
    </Router>
  );
}
