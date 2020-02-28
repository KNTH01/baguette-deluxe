// Specific polyfills to allow code compatibility with IE11
import 'core-js/es6';
import 'core-js/es7';
import 'ie11-custom-properties';
import 'element-closest-polyfill';
import 'child-replace-with-polyfill';

import 'url-polyfill'; // Polyfill to make Plyr working on IE11
import 'custom-event-polyfill'; // Polyfill to make Plyr working on IE11

// Hooks for components
import './class-component-hooks';

import Vue from 'vue';
import App from './app.vue';

import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount(`#app`);
