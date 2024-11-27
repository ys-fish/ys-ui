import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "homeBox",
    component: () => import("../pages/ys/index.vue"),
    children: [
      {
        path: "/",
        name: "homeBox1",
        component: () => import("../pages/ys/home.vue"),
      },
      {
        path: "/dosc",
        name: "docsBox",
        component: () => import("../pages/ys/layout.vue"),
        children: [
          {
            path: "/components",
            name: "ComponentBox",
            component: () => import("../pages/components/index.vue"),
          },
          {
            path: "/components/buttons",
            name: "Button",
            component: () => import("../pages/components/button.vue"),
          },
          {
            path: "/components/cards",
            name: "Card",
            component: () => import("../pages/components/card.vue"),
          },

          // 介绍
          {
            path: "/introduce/origin",
            name: "Origin",
            component: () => import("../pages/introduce/origin.vue"),
          },
          {
            path: "/introduce/version",
            name: "Version",
            component: () => import("../pages/introduce/version.vue"),
          },
          {
            path: "/introduce/log",
            name: "Log",
            component: () => import("../pages/introduce/log.vue"),
          },

          // 入门
          {
            path: "/introduction/install",
            name: "Install",
            component: () => import("../pages/introduction/install.vue"),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
