const state = {
  roles: [],
};

const mutations = {
  setRoles(state, roles) {
    state.roles = roles;
  },
};

const actions = {
  getUserInfo({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const roles = ["admin"];
        commit("setRoles", roles);
        resolve({ roles });
      }, 1000);
    });
  },

  resetToken() {
    return new Promise((resolve) => {
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
