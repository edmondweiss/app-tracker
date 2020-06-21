import React from "react";
import "react-quill/dist/quill.snow.css";
import "./App.css";
import Header from "./Header/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faCog,
  faSignOutAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

library.add(faUser);
library.add(faCog);
library.add(faSignOutAlt);
library.add(faPlus);

function App() {
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
