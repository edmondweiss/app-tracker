export type Project = {
  id: string;
  name: string;
  createDate: string;
  leadEngineer: string;
};
export type ProjectsState = {
  projects: ReadonlyArray<Project>;
};
