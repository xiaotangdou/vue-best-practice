import { storage } from "../helpers";

const state = {
  roles: [],
};

const mutations = {
  setRoles(state, roles) {
    state.roles = roles;
  },
};

const actions = {
  login(place, payload) {
    const { username, password } = payload;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "xiawen" || password === "123456") {
          storage.setToken(username);
          resolve();
        } else {
          reject("用户名或密码错误");
        }
      }, 1000);
    });
  },

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
      storage.removeToken();
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
