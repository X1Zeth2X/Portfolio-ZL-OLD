import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
    // component: () => import("@/views/Home.vue") // Lazy loading
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue")
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("@/views/Projects.vue")
  },
  {
    path: "/*",
    name: "404",
    component: () => import("@/views/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
