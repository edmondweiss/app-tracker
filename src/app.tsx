import React from "react";
import "react-quill/dist/quill.snow.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./app.css";
import { Header } from "./components/header/header";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faCog,
  faSignOutAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import ProjectView from "./components/project/project-view";

library.add(faUser);
library.add(faCog);
library.add(faSignOutAlt);
library.add(faPlus);

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className="mt-">
        <ProjectView></ProjectView>
      </main>
    </div>
  );
}

export default App;
