import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

import About from "./pages/About";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/programs" exact component={Programs} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
