// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">vCustomers</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse"
  data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/About" class="nav-link">About</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/Add" class="nav-link">Add Customer</router-link>
      </li>
    </ul>
  </div>
</nav>
      <router-view></router-view>
    </div>
  `
}).$mount('#app')
