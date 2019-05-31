import { GetterTree } from 'vuex';
import { ThemeState } from './types';
import { RootState } from '@/store/types';

export const getters: GetterTree<ThemeState, RootState> = {
  darkMode(state): boolean {
    return state.darkMode;
  },
};
