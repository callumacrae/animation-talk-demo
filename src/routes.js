import Home from "./views/Home.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
  {
    path: "/css-animations",
    meta: { title: "CSS Animations" },
    component: () => import("./views/CssAnimations.vue"),
  },
  {
    path: "/js-animations",
    meta: { title: "JS Animations" },
    component: () => import("./views/JsAnimations.vue"),
  },
  {
    path: "/js-animations-appear",
    meta: { title: "JS Animations" },
    component: () => import("./views/JsAnimationsAppear.vue"),
  },
  {
    path: "/list-anagram-1",
    meta: { title: "List animations (enter + leave)" },
    component: () => import("./views/ListAnagram1.vue"),
  },
  {
    path: "/list-anagram-2",
    meta: { title: "List animations (move)" },
    component: () => import("./views/ListAnagram2.vue"),
  },
  {
    path: "/state-transitions",
    meta: { title: "State transitions" },
    component: () => import("./views/StateTransition.vue"),
  },
  {
    path: "/svg-animations",
    meta: { title: "SVG transitions" },
    component: () => import("./views/SvgAnimation.vue"),
  },
  { path: "/:path(.*)", component: () => import("./views/NotFound.vue") },
];
