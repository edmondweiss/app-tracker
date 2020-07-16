import React from "react";
import "react-quill/dist/quill.snow.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./app.css";
import { Header } from "./components/header/header";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCog,
  faPlus,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProjectView from "./components/project/project-view";

library.add(faUser);
library.add(faCog);
library.add(faSignOutAlt);
library.add(faPlus);

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <main className="mt-">
          <Switch>
            <Route path="/projects">
              <ProjectView></ProjectView>
            </Route>
            <Route path="/" />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
