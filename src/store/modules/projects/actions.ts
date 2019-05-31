import { ActionTree } from 'vuex';
import { ProjectState } from './types';
import { RootState } from '@/store/types';

export const actions: ActionTree<ProjectState, RootState> = {
  viewProject({commit}, index) {
    commit('setView', index);
    commit('toggleDialog');
  },

  toggleDialog({commit}) {
    commit('toggleDialog');
  },
};
