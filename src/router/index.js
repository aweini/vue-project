import Vue from 'vue'
import Router from 'vue-router'
import home from '../modules/home/router'
import animals from '../modules/animals/router'

Vue.use(Router)
let defaultRoute = [{path: '/', redirect: '/home/index'}]
let routes = [
  ...defaultRoute,
  ...home,
  ...animals
]
export default new Router({
  routes: routes
})
