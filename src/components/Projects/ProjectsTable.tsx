import React, { FC } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { ReactBootstrapTableColumn } from "../../Types/ReactBootstrapTable";

export type Project = {
  readonly id: string;
  readonly name: string;
  readonly createDate: string;
};

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
