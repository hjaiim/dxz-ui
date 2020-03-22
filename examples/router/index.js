import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import MenuList from './menu'

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
}];


MenuList.forEach(item => {
    item.children.forEach(childrenItem => {
        routes.push({
            path: childrenItem.path,
            name: childrenItem.name,
            component: () => import(`@/docs${childrenItem.path}.md`)
        })
    })
})


const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;