import React from "react";
import "react-quill/dist/quill.snow.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./app.css";
import { Header } from "./modules/header/header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProjectsView } from "./modules/project/projects-view";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCog,
  faPlus,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCog, faPlus, faSignOutAlt, faUser);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="mt-">
          <Switch>
            <Route path="/projects">
              <ProjectsView />
            </Route>
            <Route path="/" />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
