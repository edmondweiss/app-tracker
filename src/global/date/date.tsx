import { Project } from "../../modules/project/project-types";
import React from "react";
import { DateColumnFormatter } from "./date-types";

export const formatDateToUsa = (date: string, pattern: RegExp) => {
  let formattedDate = date;
  const match = date.match(pattern);
  if (match && match.groups) {
    const { day, month, year } = match.groups;
    if (day && month && year) {
      formattedDate = `${month.padStart(2, "0")}/${day.padStart(
        2,
        "0"
      )}/${year}`;
    }
  }
  return formattedDate;
};

export const dateColumnFormatter: DateColumnFormatter<Project> = (
  datePattern
) => (cell, data) => <>{formatDateToUsa(data.createDate, datePattern)}</>;
