import { GetterTree, ActionTree, MutationTree } from "vuex";
import { MENU_ITEMS } from "~/constants";

export const state = () => ({
  [MENU_ITEMS.USE_CASE]: [] as string[],
  [MENU_ITEMS.LOCATION]: [] as string[],
  [MENU_ITEMS.COMPANY_SIZE]: [] as string[],
  [MENU_ITEMS.INDUSTRY]: [] as string[]
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  [MENU_ITEMS.USE_CASE]: state => state.USE_CASE,
  [MENU_ITEMS.LOCATION]: state => state.LOCATION,
  [MENU_ITEMS.COMPANY_SIZE]: state => state.COMPANY_SIZE,
  [MENU_ITEMS.INDUSTRY]: state => state.INDUSTRY
};

const toggleItem = (array: string[], menuItem: string) => {
  const data = [...array];
  const index = array.indexOf(menuItem);
  if (index > -1) {
    return data.filter(item => item !== menuItem);
  } else {
    return [...data, menuItem];
  }
};

export const mutations: MutationTree<RootState> = {
  TOGGLE_USE_CASE: (state: RootState, payload: string) =>
    (state.USE_CASE = toggleItem(state.USE_CASE, payload)),
  TOGGLE_LOCATION: (state: RootState, payload) =>
    (state.LOCATION = toggleItem(state.LOCATION, payload)),
  TOGGLE_COMPANY_SIZE: (state: RootState, payload) =>
    (state.COMPANY_SIZE = toggleItem(state.COMPANY_SIZE, payload)),
  TOGGLE_INDUSTRY: (state: RootState, payload) =>
    (state.INDUSTRY = toggleItem(state.INDUSTRY, payload)),
  CLEAR_USE_CASE: (state: RootState) => (state.USE_CASE = []),
  CLEAR_LOCATION: (state: RootState) => (state.LOCATION = []),
  CLEAR_COMPANY_SIZE: (state: RootState) => (state.COMPANY_SIZE = []),
  CLEAR_INDUSTRY: (state: RootState) => (state.INDUSTRY = [])
};

export const actions: ActionTree<RootState, RootState> = {};
