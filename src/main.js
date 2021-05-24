import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from "axios";
import VCharts from 'v-charts'
import echarts from "echarts"

Vue.use(VCharts)
Vue.prototype.$echarts = echarts;

Window.axios = axios;

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
