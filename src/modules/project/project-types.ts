export type Project = {
  id: string;
  name: string;
  createDate: string;
  leadEngineer: string;
};

export type FilterProjects = (filterValue: string) => void;
