import Vue from "vue";
import Router from "vue-router";

import Home from "@/page/home"
import Index from "@/page/index"
import School from "@/page/school"
import Companies from "@/page/companies"
import Jobs from "@/page/jobs"

import Landing from "@/page/landing"
import Login from "@/page/login"
import Register from "@/page/register"

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: "Home",
    component: Home,
    redirect: '/landing',
    children: [{
      path: '/landing',
      name: "Landing",
      component: Landing,
    }, {
      path: '/login',
      name: "Login",
      component: Login,
    }, {
      path: '/register',
      name: "Register",
      component: Register,
    }, {
      path: '/index',
      name: "Index",
      component: Index,
    }, {
      path: '/jobs',
      name: "Jobs",
      component: Jobs,
    }, {
      path: '/companies',
      name: "Companies",
      component: Companies,
    }, {
      path: '/school',
      name: "School",
      component: School,
    }]
  }]
})