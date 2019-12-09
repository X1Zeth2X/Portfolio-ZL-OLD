import { ActionTree } from "vuex";
import { DialogState } from "./types";
import { RootState } from "../types";

export const actions: ActionTree<DialogState, RootState> = {
  toggleContact({ commit }) {
    commit("toggleContact");
  },

  toggleProject({ commit }, project) {
    commit("toggleProject", project);
  }
};
