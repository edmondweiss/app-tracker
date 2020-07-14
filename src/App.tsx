import React from "react";
import "react-quill/dist/quill.snow.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./App.css";
import { Header } from "./components/Header/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faCog,
  faSignOutAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Projects from "./components/Projects/Projects";

library.add(faUser);
library.add(faCog);
library.add(faSignOutAlt);
library.add(faPlus);

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className="mt-">
        <Projects></Projects>
      </main>
    </div>
  );
}

export default App;
