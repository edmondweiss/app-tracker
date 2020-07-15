import React from "react";
import { ProjectCreateControl } from "./project-create-control";
import { Project } from "./project-types";

type ProjectHeaderProps = {
  createProject: (project: Readonly<Project>) => void;
};

export const ProjectHeader = (props: ProjectHeaderProps) => {
  return (
    <div className="d-flex justify-content-between px-5">
      <h1>Projects</h1>
      <ProjectCreateControl createProject={props.createProject} />
    </div>
  );
};
