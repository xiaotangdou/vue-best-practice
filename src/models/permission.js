import { constantRoutes, asyncRoutes } from "../router";
import { auth } from "../helpers";

const state = {
  routes: [], // 完整路由表
  addRoutes: [], // 用户可访问路由表
};

const mutations = {
  setRoutes(state, routes) {
    // 将 routes 保存到 state 中的 addRoutes
    state.addRoutes = routes;
    // 将 routes 集成到 src/router/index.js 的 constantRoutes 中
    state.routes = constantRoutes.concat(routes);
  },
};

const actions = {
  generateRoutes({ commit }, roles) {
    // 返回 Promise 对象
    return new Promise((resolve) => {
      let accessedRoutes;

      if (roles.includes("admin")) {
        // 如果角色中包含 admin，则直接跳过判断，直接将 asyncRoutes 全部返回
        accessedRoutes = asyncRoutes || [];
      } else {
        // 如果角色中没有包含 admin，则调用 filterAsyncRoutes 过滤路由
        accessedRoutes = auth.filterAsyncRoutes(asyncRoutes, roles);
      }

      // 将路由保存到 vuex 中
      commit("setRoutes", accessedRoutes);
      resolve(accessedRoutes);
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
