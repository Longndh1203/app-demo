import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// import state from "./state";
// import getters from "./getters";
// import actions from "./actions";
// import mutations from "./mutations";
import axios from "axios";

export default new Vuex.Store({
  state: {
    products: [],
  },
  getters: {},
  actions: {
    async getProducts({ commit }) {
      await axios
        .get("https://fakestoreapi.com/users")
        .then((result) => {
          commit("SAVE_USERS", result.data);
        })
        .catch((error) => {
          throw new Error(`API ${error}`);
        });
    },
  },
  mutations: {
    SAVE_USERS(state, products) {
      state.products = products;
    },
  },
});
