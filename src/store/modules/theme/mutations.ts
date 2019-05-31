import { MutationTree } from 'vuex';
import { ThemeState } from './types';

export const mutations: MutationTree<ThemeState> = {
  toggleTheme(state) {
    state.darkMode = !state.darkMode;
  },
};
