import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Store from '../store';
import Firebase from "firebase"

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      login: false,
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      login: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      login: false
    }
  }
]

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.meta.login) {
    if (Store.state.currentUser) {
    next();
  } else {
    next("/login")
  }
} else {
  next();
}
});
export default router;
