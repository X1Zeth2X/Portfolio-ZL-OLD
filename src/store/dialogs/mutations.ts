import { MutationTree } from "vuex";
import { DialogState } from "./types";

export const mutations: MutationTree<DialogState> = {
  toggleContact(state) {
    state.contact = !state.contact;
  },

  toggleProject(state, project) {
    project ? (state.selectedProject = project) : null;
    state.project = !state.project;
  }
};
