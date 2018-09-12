import Vue from 'vue'
import user from './user'

Vue.config.productionTip = false

const app = new Vue(user)
app.$mount()