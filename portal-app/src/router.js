import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  // base: process.env.NODE_ENV === "development" ? "/" : baseUrl,
  routes: [
    // {
    //   path: "/",
    //   name: "about",
    //   component: () => import("@/views/home.vue")
    // },
    {
      path: "*",
      component: () => import("@/views/404.vue")
    }
  ]
});
