const canvas = () => import(/* webpackChunkName: "animals" */ '../views/canvas.vue')
const svg = () => import(/* webpackChunkName: "animals" */ '../views/svg.vue')
// import test from '../views/test.vue'
export default [
  {
    path: '/animals/canvas',
    component: canvas
  },
  {
    path: '/animals/svg',
    component: svg
  }
]
