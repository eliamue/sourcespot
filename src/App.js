import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home.jsx";
import AddForm from './experimental/resources/AddForm';
import ResourceDetail from './experimental/resources/ResourceDetail';
import "./styles/App.css";
import "./styles/stylesheet.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/add">
          <AddForm />
        </Route>
        <Route exact path="/:id">
          <ResourceDetail />
        </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
