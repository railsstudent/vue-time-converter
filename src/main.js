import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.config.ignoredElements = ["time-converter"];

new Vue({
  render: h => h(App)
}).$mount("#app");
