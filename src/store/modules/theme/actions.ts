import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { ThemeState } from './types';

export const actions: ActionTree<ThemeState, RootState> = {
  toggleTheme({commit}) {
    commit('toggleTheme');
  },
};
