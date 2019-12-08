import { ActionTree } from 'vuex';
import { DialogState } from './types';
import { RootState } from '../types';

export const actions: ActionTree<DialogState, RootState> = {
  openContact({ commit }) {
    commit('openContact');
  },

  closeContact({ commit }) {
    commit('closeContact');
  },
}