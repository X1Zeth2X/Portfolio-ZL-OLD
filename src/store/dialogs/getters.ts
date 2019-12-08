import { GetterTree } from 'vuex';
import { DialogState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<DialogState, RootState> = {
  contact(state): boolean {
    return state.contact;
  }
}