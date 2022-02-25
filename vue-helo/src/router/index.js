import { createRouter, createWebHistory } from "vue-router";
// import Home from '../views/Home.vue'

const routes = [
  {
    name: "Index",
    path: "/",
    redirect: "/home",
    component: () => import("@/views/Index"),
    children: [
      {
        name: "Home",
        path: "/home",
        component: () => import("@/views/Home"),
      },
      {
        name: "About",
        path: "/about",
        component: () => import("@/views/About"),
      },
      {
        name: "Skill",
        path: "/skill",
        component: () => import("@/views/Skill"),
      },
      {
        name: "Contact",
        path: "/contact",
        component: () => import("@/views/Contact"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
