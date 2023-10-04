import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import filterStore from './store/filter'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  ...filterStore
})

new Vue({
  vuetify,
  store: store,
  render: h => h(App)
}).$mount('#app')
