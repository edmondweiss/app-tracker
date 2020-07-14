import React from "react";
import CreateProjectsControl from "./CreateProjectsControl";

export const ProjectsHeader = () => {
  return (
    <div className="d-flex justify-content-between px-5">
      <h1>Projects</h1>
      <CreateProjectsControl></CreateProjectsControl>
    </div>
  );
};
