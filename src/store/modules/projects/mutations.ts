import { MutationTree } from 'vuex';
import { ProjectState } from './types';

export const mutations: MutationTree<ProjectState> = {
  setView(state, index) {
    state.currentView = state.projects[index];
  },

  toggleDialog(state) {
    state.viewDialog = !state.viewDialog;
  },
};
