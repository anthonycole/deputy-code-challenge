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
