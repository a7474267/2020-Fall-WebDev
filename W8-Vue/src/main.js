import Vue from 'vue';
import 'bootstrap';
import {
  ValidationObserver,
  ValidationProvider, configure, localize, extend,
} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import zhTW from 'vee-validate/dist/locale/zh_TW.json';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
}); // 所有驗證規則
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});
localize('tw', zhTW);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
