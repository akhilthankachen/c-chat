// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Chat from './components/Chat'
import About from './components/About'

Vue.config.productionTip = false

Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path:'/', component:Chat},
    {path:'/about', component:About}
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id='app'>
      <nav id="header" class="navbar navbar-fixed-top navbar-inverse">
      <div id="header-container" class="container navbar-container">
          <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <a id="brand" class="navbar-brand" href="#">Project name</a>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
              <ul class="nav navbar-nav">
                  <li><router-link to="/">Chat</router-link></li>
                  <li><router-link to="/about">About</router-link></li>
              </ul>
          </div>
      </div>
      </nav>
      <router-view></router-view>
    </div> 
  `
}).$mount('#app')
