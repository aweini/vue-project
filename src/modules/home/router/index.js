const index = () => import(/* webpackChunkName: "animals" */ '../views/index.vue')
// import test from '../views/test.vue'
export default [
  {
    path: '/home/index',
    component: index
  }
]
