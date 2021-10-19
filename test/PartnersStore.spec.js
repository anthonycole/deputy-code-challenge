import { mutations, getters } from "../store/partners";
import {
  COMPANIES,
  SAMPLE_FILTERS,
  EMPTY_FITLER_STATE,
  STUBBED_FILTER_STATE,
  STUBBED_COUNTER_RESPONSE,
  UNIQUE_COMPANIES,
  SAMPLE_FILTER,
} from "./stubs/stubs";

test("Get Filter Count", () => {
  const state = {
    companies: COMPANIES,
  };

  const companyCount = getters.counter(state);
  expect(companyCount).toEqual(STUBBED_COUNTER_RESPONSE);
});

test("Get Filtered Companies", () => {
  const state = {
    companies: COMPANIES,
  };

  const getterInstance = getters.filteredCompanies(state);

  const filters = EMPTY_FITLER_STATE;
  filters.USE_CASE = SAMPLE_FILTERS;

  const filteredCompanies = getterInstance(filters);
  expect(filteredCompanies).toEqual(COMPANIES);
});

test("Get Uniquely Filtered Companies", () => {
  const state = {
    companies: UNIQUE_COMPANIES,
  };

  const getterInstance = getters.filteredCompanies(state);

  const filters = EMPTY_FITLER_STATE;
  filters.USE_CASE = [SAMPLE_FILTER];

  const filteredCompanies = getterInstance(filters);
  expect(filteredCompanies).toEqual([UNIQUE_COMPANIES[1]]);
});

test("Set Company Filters", () => {
  const state = {
    companies: COMPANIES,
  };

  const filters = getters.filters(state);
  expect(filters).toEqual(STUBBED_FILTER_STATE);
});

test("Set Companies List", () => {
  const state = {
    companies: [],
  };
  mutations.SET_COMPANIES(state, COMPANIES);
  expect(state.companies).toEqual(COMPANIES);
});
