import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from "axios";
import echarts from "echarts"

Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;

//Window.axios = axios;
if (process.env.NODE_ENV === "production") axios.defaults.baseURL = process.env.VUE_APP_PUBLIC_API_URL;
else axios.defaults.baseURL = process.env.VUE_APP_API_URL;

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
