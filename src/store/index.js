import Vue from "vue";
import Vuex from "vuex";

import { user, permission } from "../models";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    permission,
  },
});
