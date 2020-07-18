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
          projects: [...this.state.projects, project],
        };
      },
      () => {
        this.filterProjects(this.state.filterValue);
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

  filterProjects = (filterValue: string) => {
    const searchRegex = new RegExp(filterValue, "i");
    this.setState((state) => {
      if (filterValue === "") {
        return { ...state };
      }
      const filteredProjects = state.projects.filter((project) => {
        for (const key in project) {
          if (
            project.hasOwnProperty(key) &&
            this.searchableProjectKeys.has(key) &&
            searchRegex.test(project[key as keyof Project])
          ) {
            return true;
          }
        }
        return false;
      });

      return {
        filterValue: filterValue,
        visibleProjects: filteredProjects,
      };
    });
  };

  render() {
    return (
      <>
        <ProjectHeader createProject={this.handleCreateProject} />
        <ProjectFilter onFilter={this.filterProjects} />
        <ProjectTable
          projects={this.state.visibleProjects}
          columns={projectColumns}
        />
      </>
    );
  }
}
