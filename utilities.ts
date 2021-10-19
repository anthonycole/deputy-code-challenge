import { Filters } from "./interfaces";

export const MENU_ITEMS = {
  INDUSTRY: "INDUSTRY",
  LOCATION: "LOCATION",
  COMPANY_SIZE: "COMPANY_SIZE",
  USE_CASE: "USE_CASE",
};

export const countdown = (start: number) => {
  if (start < 1) {
    return [];
  } else {
    const arr: any = countdown((start as number) - 1);
    arr.unshift(start);
    return arr;
  }
};

export const hasEmptyFilters = (filter: Filters) => {
  return (
    filter.INDUSTRY.length == 0 &&
    filter.LOCATION.length === 0 &&
    filter.COMPANY_SIZE.length === 0 &&
    filter.USE_CASE.length === 0
  );
};
