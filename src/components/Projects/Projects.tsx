import React from "react";
import { ProjectsHeader } from "./ProjectsHeader";
import { Project, ProjectTable } from "./ProjectsTable";
import faker from "faker";
import { ReactBootstrapTableColumn } from "../../Types/ReactBootstrapTable";
import {
  compareNumericStrings,
  compareStringDates,
} from "../../core/comparator/comparator";

const projectColumns: readonly ReactBootstrapTableColumn<Project>[] = [
  {
    dataField: "name",
    text: "Name",
    sort: true,
  },
  {
    dataField: "createDate",
    text: "Date Created",
    sort: true,
    sortFunc: compareStringDates,
  },
] as const;

export default class Projects extends React.Component<any, any> {
  createProjects(numOfProjects: number): readonly Project[] {
    const projects: Project[] = [];
    for (let i = 0; i < numOfProjects; i++) {
      projects.push({
        id: faker.random.uuid(),
        name: faker.commerce.productName(),
        createDate: faker.date.past().toISOString().split("T")[0],
      });
    }
    return projects;
  }

  render() {
    return (
      <>
        <ProjectsHeader />
        <ProjectTable
          projects={this.createProjects(10)}
          columns={projectColumns}
        />
      </>
    );
  }
}
