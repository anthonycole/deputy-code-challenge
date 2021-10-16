import { GetterTree, ActionTree, MutationTree } from "vuex";
import _ from "lodash";
import { MENU_ITEMS } from "~/constants";

interface Company {
  company_id: number;
  company_name: string;
  image_url: string;
  excerpt: string;
  industry: string;
  location: string;
  company_size: string;
  use_case: string[];
  word_count: number;
}

const filters = {
  COMPANY_SIZE: "company_size",
  INDUSTRY: "industry",
  LOCATION: "location"
};

interface Filters {
  use_case: string[];
  location: string[];
  company_size: string[];
  industry: string[];
}

const defaultFilters: Filters = {
  use_case: [],
  location: [],
  company_size: [],
  industry: []
};

export const state = () => ({
  companies: [] as Company[],
  filteredCompanies: [] as any,
  filters: defaultFilters as Filters,
  counter: [] as any
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  companies: state => state.companies,
  filters: state => state.filters,
  filteredCompanies: state => state.filteredCompanies,
  counter: state => state.counter
};

const removeDuplicateItems = (items: any) => {
  return items.filter(
    (item: string, index: number) => items.indexOf(item) === index
  );
};

const setCompanyFilters = (companies: Company[]): Filters => {
  return {
    use_case: removeDuplicateItems(
      companies.map(company => company.use_case).flat()
    ),
    location: removeDuplicateItems(companies.map(company => company.location)),
    company_size: removeDuplicateItems(
      companies.map(company => company.company_size)
    ),
    industry: removeDuplicateItems(companies.map(company => company.industry))
  };
};

const applyStateFilters = (company: Company, filter: any): boolean => {
  if (
    filter.INDUSTRY.length == 0 &&
    filter.LOCATION.length === 0 &&
    filter.COMPANY_SIZE.length === 0 &&
    filter.USE_CASE.length === 0
  ) {
    return true;
  }

  const industryFilter = filter.INDUSTRY.includes(company.industry);
  const locationFilter = filter.LOCATION.includes(company.location);
  const companySizeFilter = filter.COMPANY_SIZE.includes(company.company_size);
  const useCaseFilter = filter.USE_CASE.find((useCase: any) => {
    return company.use_case.includes(useCase);
  });

  return industryFilter || locationFilter || companySizeFilter || useCaseFilter;
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

const counterUseCaseReducer = (filters: any, companies: Company[]) => {
  return filters.use_case.reduce((counter: any, filter: any) => {
    const filterCompanies = companies.filter((company: any) => {
      return company.use_case.includes(filter);
    });

    counter[filter] = filterCompanies.length;

    return { ...counter };
  }, {});
};

const setComapnyFilterCount = (state: any) => {
  const companies = [...state.companies];
  const filters: any = { ...state.filters };

  const industryCounter = counterReducer(filters, companies, "industry");
  const locationCounter = counterReducer(filters, companies, "location");
  const companySizeCounter = counterReducer(filters, companies, "company_size");
  const useCaseCounter = counterUseCaseReducer(filters, companies);

  return {
    [MENU_ITEMS.USE_CASE]: useCaseCounter,
    [MENU_ITEMS.LOCATION]: locationCounter,
    [MENU_ITEMS.COMPANY_SIZE]: companySizeCounter,
    [MENU_ITEMS.INDUSTRY]: industryCounter
  };
};

export const mutations: MutationTree<RootState> = {
  FETCH_COMPANIES: (state: RootState, companies) =>
    (state.companies = companies),
  FILTER_COMPANIES: (state: RootState, payload) =>
    (state.filteredCompanies = [
      ...state.companies.filter(company => applyStateFilters(company, payload))
    ]),
  SET_FILTERS: (state: RootState, filters) => (state.filters = filters),
  SET_FILTERED_COMPANIES: (state: RootState) =>
    (state.filteredCompanies = [...state.companies]),
  SET_COUNTER: (state: RootState, payload) => (state.counter = { ...payload })
};

export const actions: ActionTree<RootState, RootState> = {
  async fetchCompanies({ commit, state }) {
    const companiesData = await fetch(
      "http://www.mocky.io/v2/5d1c07823400005200b5fae7"
    );
    const companies = await companiesData.json();
    commit("FETCH_COMPANIES", companies);
    commit("SET_FILTERS", setCompanyFilters(companies));
    commit("SET_COUNTER", setComapnyFilterCount(state));
    commit("SET_FILTERED_COMPANIES");
  }
};