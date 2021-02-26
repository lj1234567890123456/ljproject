import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.min.css';
import moment from 'moment';
import Vant from 'vant'
import 'vant/lib/index.css'


axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.prototype.axios = axios;
Vue.prototype.moment = moment;
Vue.prototype.qs = qs;
moment.locale('zh-cn'); // zh-cn
Vue.config.productionTip = false
Vue.use(MintUI);
Vue.use(Vant)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
