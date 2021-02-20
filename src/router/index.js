import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import LoginForm from "@/views/LoginForm";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    exact: true,
  },
  {
    path: "/login",
    name: "login",
    component: LoginForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
