import Vue from 'vue'
import book from './book'

Vue.config.productionTip = false

const app = new Vue(book)
app.$mount()