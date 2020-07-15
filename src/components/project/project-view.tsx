import React, { Component } from "react";
import { ProjectHeader } from "./project-header";
import { ProjectTable } from "./project-table";
import faker from "faker";
import { ReactBootstrapTableColumn } from "../../Types/ReactBootstrapTable";
import { compareStringDates } from "../../core/comparator/comparator";
import { ProjectFilter } from "./project-filter";
import { Project, ProjectsState } from "./project-types";

const projectColumns: readonly ReactBootstrapTableColumn<
  Readonly<Project>
>[] = [
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
  {
    dataField: "leadEngineer",
    text: "Lead",
    sort: true,
  },
] as const;

export default class ProjectView extends Component<{}, ProjectsState> {
  private projects: readonly Project[] = this.createProjects(10);

  constructor(props = {}) {
    super(props);

    this.state = {
      projects: this.projects,
    };
  }

  handleCreateProject = (project: Project) => {
    this.setState((state, props) => {
      return {
        projects: [...this.state.projects, project],
      };
    });
  };

  createProjects(numOfProjects: number): Project[] {
    const projects: Project[] = [];
    for (let i = 0; i < numOfProjects; i++) {
      projects.push({
        id: faker.random.uuid(),
        name: faker.commerce.productName(),
        createDate: faker.date.past().toISOString().split("T")[0],
        leadEngineer: faker.name.findName(),
      });
    }
    return projects;
  }

  render() {
    return (
      <>
        <ProjectHeader createProject={this.handleCreateProject} />
        <ProjectFilter />
        <ProjectTable projects={this.state.projects} columns={projectColumns} />
      </>
    );
  }
}
