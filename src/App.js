import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import AddForm from "./components/AddForm";
import Home from "./components/Home";
import Resources from "./components/resources/Resources";
import ResourceDetail from "./components/resources/ResourceDetail";
import EditResource from "./components/resources/EditResource";
import ResourceList from "./components/dropdown/ResourceList";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/resourcelist">
            <ResourceList />
          </Route>
          <Route exact path="/resources">
            <Resources />
          </Route>
          <Route exact path="/resources/:id">
            <ResourceDetail />
          </Route>
          <Route exact path="/edit/:id">
            <EditResource />
          </Route>
          <Route exact path="/add">
            <AddForm />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
