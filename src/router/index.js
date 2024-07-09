import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Post from "../views/Post.vue";
import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/project/:id",
        name: "project",
        component: Post,
    },
    // Catch-all route for 404 - must be the last in the array
    {
        path: "/:catchAll(.*)",
        name: "not-found",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;
