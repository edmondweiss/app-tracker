import React, { Component } from "react";
import { ProjectHeader } from "./project-header";
import { ProjectTable } from "./project-table";
import faker from "faker";
import { ReactBootstrapTableColumn } from "../../Types/ReactBootstrapTable";
import { compareStringDates } from "../../global/comparator/comparator";
import { ProjectFilter } from "./project-filter";
import { Project } from "./project-types";
import { ColumnFormatter } from "react-bootstrap-table-next";
import { Link } from "react-router-dom";
import { dateColumnFormatter } from "../../global/date/date";

type ProjectsState = {
  filterValue: string;
  projects: ReadonlyArray<Project>;
  visibleProjects: ReadonlyArray<Project>;
};

const navLinkFormatter: ColumnFormatter<Project> = (cell, data) => {
  return (
    <Link
      to={{
        pathname: `projects/${encodeURIComponent(data.id)}`,
        state: data,
      }}
    >
      {data.name}
    </Link>
  );
};

const projectColumns: readonly ReactBootstrapTableColumn<
  Readonly<Project>
>[] = [
  {
    dataField: "name",
    text: "Name",
    sort: true,
    formatter: navLinkFormatter,
  },
  {
    dataField: "createDate",
    text: "Date Created",
    sort: true,
    sortFunc: compareStringDates,
    formatter: dateColumnFormatter(
      /(?<year>\d{4})-(?<month>\d{1,2})-(?<day>\d{1,2})/
    ),
  },
  {
    dataField: "leadEngineer",
    text: "Lead",
    sort: true,
  },
] as const;

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

  filterProjects = (
    projects: readonly Project[] = [],
    searchRegex: RegExp
  ): Project[] =>
    projects.filter((project) => {
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

  handleFilterProjects = (filterValue: string) => {
    this.setState((state) => {
      return {
        projects: state.projects,
        visibleProjects:
          filterValue === ""
            ? state.projects
            : this.filterProjects(state.projects, new RegExp(filterValue, "i")),
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
