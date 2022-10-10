import { createWebHistory, createRouter } from "vue-router";
import HelloView from "@/views/HelloView.vue"

const routes = [
  {
    path: "/",
    name: "Hello",
    component: HelloView
  }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});

