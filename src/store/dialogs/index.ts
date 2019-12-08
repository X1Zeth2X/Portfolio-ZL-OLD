import { DialogState } from "./types"
import { RootState } from '../types';
import { Module } from 'vuex';

import { getters } from './getters';
import { actions } from './actions';
import { mutations} from './mutations';

export const state: DialogState = {
    contact: false,
}

const namespaced: boolean = true;

export const dialog: Module<DialogState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
}