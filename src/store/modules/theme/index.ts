import { ThemeState } from './types';
import { Module } from 'vuex';
import { RootState } from '@/store/types';

import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

export const state: ThemeState = {
    darkMode: false,
};

const namespaced: boolean = true;

export const theme: Module<ThemeState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
