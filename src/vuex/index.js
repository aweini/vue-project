import Vue from 'vue'
import Vuex from 'vuex'
import home from '../modules/home/vuex'
import animals from '../modules/animals/vuex'
Vue.use(Vuex)
let store = new Vuex.Store({
  modules: {
    home: home,
    animals: animals
  }
})
export default store
