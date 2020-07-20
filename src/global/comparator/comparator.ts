import { DateComparator, Order, StringComparator } from "./comparator-types";

const dateDelimiterRegex = /[-/]/g;

export const numericStringCollator = new Intl.Collator(undefined, {
  usage: "sort",
  numeric: true,
});

export const compareDates: DateComparator = (a, b, order = "asc") =>
  order === "asc"
    ? a.getMilliseconds() - b.getMilliseconds()
    : b.getMilliseconds() - a.getMilliseconds();

export const compareDateStrings: StringComparator = (a, b, order = "asc") =>
  order === "asc"
    ? numericStringCollator.compare(
        a.replace(dateDelimiterRegex, ""),
        b.replace(dateDelimiterRegex, "")
      )
    : numericStringCollator.compare(
        b.replace(dateDelimiterRegex, ""),
        a.replace(dateDelimiterRegex, "")
      );

export const compareNumericStrings: StringComparator = (
  a,
  b,
  order: Order = "asc"
) =>
  order === "asc"
    ? numericStringCollator.compare(a, b)
    : numericStringCollator.compare(b, a);
