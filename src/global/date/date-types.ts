import { ColumnFormatter } from "react-bootstrap-table-next";

export type DateColumnFormatter<T> = (
  datePattern: RegExp
) => ColumnFormatter<T>;
