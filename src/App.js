import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Episodes from "./components/Episodes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/episodes" exact component={Episodes} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
