import { GetterTree, ActionTree, MutationTree } from "vuex";
import _, { filter, startCase } from "lodash";
import { MENU_ITEMS, PAGINATION_COUNT } from "~/constants";
import { Company, Filters } from "../interfaces";

const defaultFilters: Filters = {
  USE_CASE: [],
  LOCATION: [],
  COMPANY_SIZE: [],
  INDUSTRY: [],
};

const counterUseCaseReducer = (filters: any, companies: Company[]) => {
  return filters.use_case.reduce((counter: any, filter: any) => {
    const filterCompanies = companies.filter((company: any) => {
      return company.use_case.includes(filter);
    });

    counter[filter] = filterCompanies.length;

    return { ...counter };
  }, {});
};

const removeDuplicateItems = (items: any) => {
  return items.filter(
    (item: string, index: number) => items.indexOf(item) === index
  );
};

const setCompanyFilters = (companies: Company[]): Filters => {
  return {
    USE_CASE: removeDuplicateItems(
      companies.map((company) => company.use_case).flat()
    ),
    LOCATION: removeDuplicateItems(
      companies.map((company) => company.location)
    ),
    COMPANY_SIZE: removeDuplicateItems(
      companies.map((company) => company.company_size)
    ),
    INDUSTRY: removeDuplicateItems(
      companies.map((company) => company.industry)
    ),
  };
};

const counterReducer = (
  filters: any,
  companies: Company[],
  property: string
) => {
  return filters[property].reduce((counter: any, filter: any) => {
    const filterCompanies = companies.filter(
      (company: any) => company[property] === filter
    );
    counter[filter] = filterCompanies.length;
    return { ...counter };
  }, {});
};

const hasEmptyFilters = (filter: Filters) => {
  return (
    filter.INDUSTRY.length == 0 &&
    filter.LOCATION.length === 0 &&
    filter.COMPANY_SIZE.length === 0 &&
    filter.USE_CASE.length === 0
  );
};

const applyStateFilters = (company: Company, filter: any): boolean => {
  if (hasEmptyFilters(filter)) {
    return true;
  }

  const industryFilter =
    filter.INDUSTRY.includes(company.industry) || filter.INDUSTRY.length == 0;
  const locationFilter =
    filter.LOCATION.includes(company.location) || filter.LOCATION.length === 0;
  const companySizeFilter =
    filter.COMPANY_SIZE.includes(company.company_size) ||
    filter.COMPANY_SIZE.length === 0;
  const useCaseFilter =
    filter.USE_CASE.find((useCase: any) => {
      return company.use_case.includes(useCase);
    }) || filter.USE_CASE.length === 0;

  return industryFilter && locationFilter && companySizeFilter && useCaseFilter;
};

const setCompanyFilterCount = (state: any) => {
  const companies = [...state.companies];
  const filters: any = setCompanyFilters(companies);

  const industryCounter = counterReducer(filters, companies, "industry");
  const locationCounter = counterReducer(filters, companies, "location");
  const companySizeCounter = counterReducer(filters, companies, "company_size");
  const useCaseCounter = counterUseCaseReducer(filters, companies);

  return {
    [MENU_ITEMS.USE_CASE]: useCaseCounter,
    [MENU_ITEMS.LOCATION]: locationCounter,
    [MENU_ITEMS.COMPANY_SIZE]: companySizeCounter,
    [MENU_ITEMS.INDUSTRY]: industryCounter,
  };
};

const setCurrentPages = (companies: Company[], currentPage: number) => {
  const pageNumber = currentPage - 1;
  return companies.slice(
    pageNumber * PAGINATION_COUNT,
    pageNumber * PAGINATION_COUNT + PAGINATION_COUNT
  );
};

export const state = () => ({
  companies: [] as Company[],
  filteredCompanies: [] as any,
  filters: defaultFilters as Filters,
  counter: [] as any,
  currentPage: 1,
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  companies: (state) => state.companies,
  filters: (state) => setCompanyFilters(state.companies),
  filteredCompanies: (state, getters) => (activeFilters: Filters) => {
    const companies = state.companies.filter((company) =>
      applyStateFilters(company, activeFilters)
    );

    return setCurrentPages(companies, state.currentPage);
  },
  counter: (state) => setCompanyFilterCount(state),
  pages: (state) => {
    const filterCount = hasEmptyFilters(state.filters)
      ? state.companies
      : state.filteredCompanies;

    return Math.ceil((filterCount.length + 1) / PAGINATION_COUNT);
  },
};

export const mutations: MutationTree<RootState> = {
  SET_COMPANIES: (state: RootState, companies) => (state.companies = companies),
  SET_PAGE: (state, payload) => (state.currentPage = payload),
};

export const actions: ActionTree<RootState, RootState> = {
  async fetchCompanies({ commit, state }) {
    const companiesData = await fetch(
      "http://www.mocky.io/v2/5d1c07823400005200b5fae7"
    );
    const companies = await companiesData.json();
    const sortedCompanies = companies.sort((a: Company, b: Company) =>
      a.company_id > b.company_id ? 1 : -1
    );
    commit("SET_COMPANIES", sortedCompanies);
  },
};
