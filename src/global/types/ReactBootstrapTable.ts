import { ColumnDescription } from "react-bootstrap-table-next";

export type ReactBootstrapTableColumn<T extends object> = ColumnDescription<
  T,
  string
> & {
  dataField: keyof T;
};
