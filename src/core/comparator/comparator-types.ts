export type Order = "asc" | "desc";

export type StringComparator = (a: string, b: string, order?: Order) => number;

export type DateComparator = (a: Date, b: Date, order?: Order) => number;

export type StringDateComparator = (
  a: string,
  b: string,
  order?: Order
) => number;
