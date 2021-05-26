import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from "axios";
import VCharts from 'v-charts'
import echarts from "echarts"

Vue.use(VCharts)
Vue.prototype.$echarts = echarts;
//Vue.prototype.$axios = axios;

Window.axios = axios;
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
