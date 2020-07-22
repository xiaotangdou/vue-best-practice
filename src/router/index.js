import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// 不需要授权，可直接访问的页面
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login"),
  },
  {
    path: "/",
    component: () => import("@/views/home"),
  },
];

// 需要授权，才可访问的页面
export const asyncRoutes = [
  {
    path: "/todo",
    component: () => import("@/views/todo"),
  },
];

export default new Router({
  mode: "history",
  /**
   * base 对于部署到非根目录有用
   * 一个使用场景：
   */
  base: "/",
  routes: constantRoutes,
});
