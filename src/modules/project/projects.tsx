import React, { Component } from "react";
import { ProjectHeader } from "./project-header";
import { ProjectTable } from "./project-table";
import faker from "faker";
import { ProjectFilter } from "./project-filter";
import { Project } from "./project-types";
import { filter } from "../../global/util/util";
import { projectColumns } from "./project-table-config";

type ProjectsState = {
  filterValue: string;
  projects: ReadonlyArray<Project>;
  visibleProjects: ReadonlyArray<Project>;
};

export class Projects extends Component<{}, ProjectsState> {
  private searchableProjectKeys = new Set([
    "name",
    "leadEngineer",
    "createDate",
  ]);

  constructor(props = {}) {
    super(props);
    const projects = this.createProjects(10);

    this.state = {
      filterValue: "",
      projects: projects,
      visibleProjects: projects,
    };
  }

  handleCreateProject = (project: Project) => {
    this.setState(
      (state, props) => {
        return {
          projects: [...state.projects, project],
        };
      },
      () => {
        this.handleFilterProjects(this.state.filterValue);
      }
    );
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

  handleFilterProjects = (filterValue: string) => {
    if (filterValue === "") {
      return;
    }
    this.setState((state) => {
      return {
        visibleProjects: filter(
          state.projects,
          this.searchableProjectKeys,
          new RegExp(filterValue, "i")
        ),
        filterValue: filterValue,
      };
    });
  };

  render() {
    return (
      <>
        <ProjectHeader createProject={this.handleCreateProject} />
        <ProjectFilter onFilter={this.handleFilterProjects} />
        <ProjectTable
          projects={this.state.visibleProjects}
          columns={projectColumns}
        />
      </>
    );
  }
}
