import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Post from "../components/site/blog/Post.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/post/:id",
    name: "Post",
    component: Post,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
