import { GetterTree } from 'vuex';
import { ProjectState } from './types';
import { RootState } from '@/store/types';

export const getters: GetterTree<ProjectState, RootState> = {
  projects(state) {
    return state.projects;
  },

  viewDialog(state) {
    return state.viewDialog;
  },

  currentView(state) {
    return state.currentView;
  },
};
