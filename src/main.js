// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible' // 解决移动端适配的问题

// FastClick 是一个简单，易于使用的JS库用于消除在移动浏览器上触发click事件与一个物理Tap(敲击)之间的300延迟。
// 在移动浏览器中，当你点击按钮的单击事件时，将会等待大约300ms的时间。这是因为，浏览器是等着看，如果你是真正执行双击。
// fastclick不附加任何监听器在桌面浏览器上面，所以如果你的项目不是针对的移动浏览器，那么就不要使用这个插件
import store from './store'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
