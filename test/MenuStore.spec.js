import { mutations } from "../store/menu";
import { SAMPLE_FILTERS, SAMPLE_FILTER } from "./stubs/stubs";

test("Succesully Toggle Use Case", () => {
  const state = {
    USE_CASE: [],
  };
  mutations.TOGGLE_USE_CASE(state, SAMPLE_FILTER);
  expect(state.USE_CASE).toEqual([SAMPLE_FILTER]);
  mutations.TOGGLE_USE_CASE(state, SAMPLE_FILTER);
  expect(state.USE_CASE).toEqual([]);
});

test("Succesully Toggle Location", () => {
  const state = {
    LOCATION: [],
  };
  mutations.TOGGLE_LOCATION(state, SAMPLE_FILTER);
  expect(state.LOCATION).toEqual([SAMPLE_FILTER]);
  mutations.TOGGLE_LOCATION(state, SAMPLE_FILTER);
  expect(state.LOCATION).toEqual([]);
});

test("Succesully Toggle Company Size", () => {
  const state = {
    COMPANY_SIZE: [],
  };
  mutations.TOGGLE_COMPANY_SIZE(state, SAMPLE_FILTER);
  expect(state.COMPANY_SIZE).toEqual([SAMPLE_FILTER]);
  mutations.TOGGLE_COMPANY_SIZE(state, SAMPLE_FILTER);
  expect(state.COMPANY_SIZE).toEqual([]);
});

test("Succesully Toggle Industry", () => {
  const state = {
    INDUSTRY: [],
  };
  mutations.TOGGLE_INDUSTRY(state, SAMPLE_FILTER);
  expect(state.INDUSTRY).toEqual([SAMPLE_FILTER]);
  mutations.TOGGLE_INDUSTRY(state, SAMPLE_FILTER);
  expect(state.INDUSTRY).toEqual([]);
});

test("Succesully Clear Use Case", () => {
  const state = {
    USE_CASE: SAMPLE_FILTERS,
  };
  mutations.CLEAR_USE_CASE(state);
  expect(state.USE_CASE).toEqual([]);
});

test("Succesully Clear Location", () => {
  const state = {
    LOCATION: SAMPLE_FILTERS,
  };
  mutations.CLEAR_LOCATION(state);
  expect(state.LOCATION).toEqual([]);
});

test("Succesully Clear Company Size", () => {
  const state = {
    COMPANY_SIZE: SAMPLE_FILTERS,
  };
  mutations.CLEAR_COMPANY_SIZE(state);
  expect(state.COMPANY_SIZE).toEqual([]);
});

test("Succesully Clear Industry", () => {
  const state = {
    INDUSTRY: SAMPLE_FILTERS,
  };
  mutations.CLEAR_INDUSTRY(state);
  expect(state.INDUSTRY).toEqual([]);
});
