import Vue from "vue";
import VueRouter from "vue-router";

// pages
import HomePage from "../pages/Home.vue";
import AboutPage from "../pages/About.vue";
import TodosPage from "../pages/Todos.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history", // hash
  base: "/",
  fallback: true,
  routes: [
    {
      path: "/",
      name: "home-page",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about-page",
      component: AboutPage,
    },
    {
      path: "/todos",
      name: "todos-page",
      component: TodosPage,
    },
  ],
});

export default router;
