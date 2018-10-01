import axios from 'axios'
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

const devUrl = 'http://localhost:3000';
const prodUrl = '';
const $axios = axios.create({
  baseURL: devUrl || prodUrl,
  timeout: 2000,
  headers: {
    "Authorization": "",
    "Content-Type": "application/json",
    "Custom-Header": "Anthony", 
  }
})

Vue.prototype.$axios = $axios; 

new Vue({
  el: '#app',
  render: h => h(App)
})
