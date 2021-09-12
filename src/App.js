import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Books from "./components/Books";
import Footer from "./components/Footer";

import { BrowserRouter, Route, Switch } from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={(props) => <Books {...props} />} />

            <Route path="/profile">
              <p> Welcome user please log in So we will show u your information </p>
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
