export type Project = {
  id: string;
  name: string;
  createDate: string;
  leadEngineer: string;
};

export type ProjectsState = {
  filterValue: string;
  projects: ReadonlyArray<Project>;
  visibleProjects: ReadonlyArray<Project>;
};

export type FilterProjects = (filterValue: string) => void;

export type ProjectFilterProps = {
  onFilter: FilterProjects;
};
