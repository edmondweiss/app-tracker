import React, { FC } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { ReactBootstrapTableColumn } from "../../Types/ReactBootstrapTable";
import { Project } from "./project-types";

type ProjectTableProps<T extends object> = {
  projects: readonly Project[];
  columns: readonly ReactBootstrapTableColumn<T>[];
};

export const ProjectTable: FC<ProjectTableProps<Project>> = (props) => (
  <BootstrapTable
    bootstrap4
    keyField="id"
    data={props.projects as Project[]}
    columns={props.columns as ReactBootstrapTableColumn<Project>[]}
  />
);
