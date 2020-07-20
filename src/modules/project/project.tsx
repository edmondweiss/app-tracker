import React, { FC } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Project as ProjectModel } from "./project-types";

type ProjectUrlParams = {
  projectId: string;
};

export const Project: FC = () => {
  const project = useHistory<ProjectModel | null>();
  const { projectId } = useParams<ProjectUrlParams>();
  if (!project) {
    // TODO: Make call to backend for project data by using project id.
  }
  return <></>;
};
