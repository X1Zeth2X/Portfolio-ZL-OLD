import { DialogState } from "./types";
import { RootState } from "../types";
import { Module } from "vuex";

import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";

export const state: DialogState = {
  contact: false,
  project: false,
  selectedProject: {
    name: "",
    desc: "",
    image: "",
    github: "",
    story: "",
    view: "",
    stack: []
  }
};

const namespaced: boolean = true;

export const dialog: Module<DialogState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
