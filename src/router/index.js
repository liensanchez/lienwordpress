import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "@/views/About.vue";
import Post from "../views/Post.vue";
import Contact from "../views/Contact.vue";
import NotFound from '../views/NotFound.vue';
import Style from '../views/Style.vue';
import Portfolio from '../views/Portfolio.vue';

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: About,
    },
    {
        path: "/styles",
        name: "style",
        component: Style,
    },
    {
        path: "/portfolio",
        name: "portfolio",
        component: Portfolio,
    },
    {
        path: "/project/:slug/:id?",
        name: "project",
        component: Post,
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact,
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
