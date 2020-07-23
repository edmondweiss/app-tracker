import { ColumnFormatter } from "react-bootstrap-table-next";
import { Project } from "./project-types";
import { Link } from "react-router-dom";
import { ReactBootstrapTableColumn } from "../../global/types/ReactBootstrapTable";
import { compareDateStrings } from "../../global/comparator/comparator";
import { dateColumnFormatter } from "../../global/date/date";
import React from "react";

export const navLinkFormatter: ColumnFormatter<Project> = (cell, data) => {
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

export const projectColumns: readonly ReactBootstrapTableColumn<
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
    sortFunc: compareDateStrings,
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
