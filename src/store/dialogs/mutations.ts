import { MutationTree } from 'vuex';
import { DialogState } from './types';

export const mutations: MutationTree<DialogState> = {
  openContact(state) {
    state.contact = true;
  },

  closeContact(state) {
    state.contact = false;
  }
}