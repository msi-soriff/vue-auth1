import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import login from "@/views/login.vue";
import Register from "@/views/Register.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    component: Home,
  },
  {
    path: "/login",
    component: login,
  },
  {
    path: "/register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
