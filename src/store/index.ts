import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";

// Import modules
import { dialog } from "./dialogs/index";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0"
  },
  modules: {
    dialog
  }
};

export default new Vuex.Store<RootState>(store);
