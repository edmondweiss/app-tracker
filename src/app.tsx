import React from "react";
import "react-quill/dist/quill.snow.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./app.css";
import { Header } from "./modules/header/header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Projects } from "./modules/project/projects";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCog,
  faPlus,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Project } from "./modules/project/project";

library.add(faCog, faPlus, faSignOutAlt, faUser);

function App() {
  return (
    <div className="App">
      <Header />
      <main className="mt-">
        <Switch>
          <Route path="/projects/:projectId">
            <Project />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
