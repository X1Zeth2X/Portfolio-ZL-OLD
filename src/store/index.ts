import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';

// Import modules
import { theme } from './modules/theme';
import { projects } from './modules/projects';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '0.0.1',
  },
  modules: {
    theme,
    projects,
  },
};

export default new Vuex.Store<RootState>(store);
