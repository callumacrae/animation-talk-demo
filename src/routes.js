import Home from "./views/Home.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
  {
    path: "/css-animations",
    meta: { title: "CSS Animations" },
    component: () => import("./views/CssAnimations.vue"),
  },
  { path: "/:path(.*)", component: () => import("./views/NotFound.vue") },
];
