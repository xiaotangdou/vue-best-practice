import router from "./router";
import store from "./store";
import { storage } from "./helpers";

const ROUTE_WHITELIST = ["/login"];

router.beforeEach(async (to, from, next) => {
  const token = storage.getToken();

  if (token) {
    if (to.path === "/login") {
      next("/");
    } else {
      const hasRoles = store.user.roles && store.user.roles.length > 0;

      if (hasRoles) {
        next();
      } else {
        try {
          // 异步获取用户的角色
          const { roles } = await store.dispatch("user/getUserInfo");

          // 根据用户角色，动态生成路由
          const accessRoutes = await store.dispatch(
            "permission/generateRoutes",
            roles
          );

          // 调用 router.addRoutes 动态添加路由
          router.addRoutes(accessRoutes);

          // 使用 replace 访问路由，不会在 history 中留下记录
          next({ ...to, replace: true });
        } catch (err) {
          // 移除 Token 数据
          await store.dispatch("user/resetToken");

          // 重定向至登录页面
          next(`/login?redirect=${to.path}`);
        }
      }
    }
  } else {
    // 如果访问的 URL 在白名单中，则直接访问
    if (ROUTE_WHITELIST.indexOf(to.path) !== -1) {
      next();
    } else {
      // 如果访问的 URL 不在白名单中，则直接重定向到登录页面，并将访问的 URL 添加到 redirect 参数中
      next(`/login?redirect=${to.path}`);
    }
  }
});
